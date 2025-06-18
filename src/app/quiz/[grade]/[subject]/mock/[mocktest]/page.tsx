"use client"
import React, { useEffect, useState } from "react";

import MockProgressBar from "@/component/User/MockProgressBar";
import MockQuestionNavigator from "@/component/User/MockQuestionNavigator";
import MockQuestionAnswer from "@/component/User/MockQuestionAnswer";
import Timer from "@/component/User/Timer";
import NavigationButtons from "@/component/User/NavigationButtons";
import QuizResult from "@/component/User/QuizResult";
import { usePostQuizEndMutation, useQuizQuestionAnswerQuery } from "../../../../../../../slices/user/quizSliceUser";
import { useParams } from "next/navigation";

interface Question {
    questionId: string;
    question: string;
    options: string[];
    correctAnswer: string;
    reason: string;
    number: number;
    userAnswer: string | null;
    type: "answered" | "not answered";
}

interface QuizQuestionAnswerResponse {
    status: string;
    statusCode: number;
    data: {
        questions: Question[];
        timeRemaining: number;
        correctCount: number;
        wrongCount: number;
        totalQuestions: number;
        resultPercentage: number;
        isEnded: boolean
    };
    error: any;
    success: boolean;
}

const MockTest = () => {
    const parms = useParams()
    console.log(parms?.mocktest, "parms");
    const {
        data: quizQuestionAnswer,
        isLoading,
        isSuccess,
        error,
    } = useQuizQuestionAnswerQuery({ attemptId: parms?.mocktest }) as {
        data: QuizQuestionAnswerResponse;
        isLoading: boolean;
        isSuccess: boolean;
        error: unknown;
    };


    const questions = quizQuestionAnswer?.data?.questions
    // const questions = [
    //     {
    //         id: 1,
    //         text: "Forming a hypothesis is the _____ step in the scientific method.",
    //         options: ["Third", "Second", "First", "Final"]
    //     },
    //     {
    //         id: 2,
    //         text: "What is the first step in the scientific method?",
    //         options: ["Forming a hypothesis", "Drawing a conclusion", "Making observations", "Conducting an experiment"]
    //     },
    //     {
    //         id: 3,
    //         text: "Which step comes after forming a hypothesis in the scientific method?",
    //         options: ["Analyzing data", "Conducting an experiment", "Publishing results", "Making observations"]
    //     },
    //     {
    //         id: 4,
    //         text: "Why is it important to analyze data in the scientific method?",
    //         options: ["To guess the result", "To identify patterns and support conclusions", "To skip steps", "To change the hypothesis randomly"]
    //     },
    //     {
    //         id: 5,
    //         text: "What is the final step of the scientific method?",
    //         options: ["Forming a hypothesis", "Sharing results", "Making observations", "Testing again"]
    //     }
    // ];


    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<{ [key: number]: string }>({});
    const [reviewed, setReviewed] = useState<number[]>([]);
    const [isSubmitted, setIsSubmitted] = useState(false); // 🔥 New
    const [secondsLeft, setSecondsLeft] = useState<number>(1);
    useEffect(() => {
        if (quizQuestionAnswer?.data?.isEnded === true) {
            setIsSubmitted(true);
        }
        if (typeof quizQuestionAnswer?.data?.timeRemaining === 'number') {
            setSecondsLeft(quizQuestionAnswer.data.timeRemaining);
        }
    }, [quizQuestionAnswer]);
    console.log(secondsLeft, "secondsLeft");

    // Countdown effect
    useEffect(() => {
        if (secondsLeft === undefined || secondsLeft <= 0) return;

        const timer = setInterval(() => {
            setSecondsLeft((prev) => (prev && prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, [secondsLeft]);

    useEffect(() => {
        if (secondsLeft === 0 && !isSubmitted) {
            handleSubmit();
        }
    }, [secondsLeft, isSubmitted]);

    useEffect(() => {
        if (isSuccess && quizQuestionAnswer?.data?.questions) {
            const initialAnswers: { [key: number]: string } = {};

            quizQuestionAnswer?.data?.questions?.forEach((q, index) => {
                if (q.userAnswer) {
                    initialAnswers[index] = q.userAnswer;
                }
            });

            setAnswers(initialAnswers);
        }
    }, [isSuccess, quizQuestionAnswer]);

    const handleAnswer = (option: string) => {
        setAnswers({ ...answers, [currentQuestion]: option });
    };

    const markAsReview = () => {
        if (reviewed.includes(currentQuestion)) {
            setReviewed(reviewed.filter((q) => q !== currentQuestion));
        } else {
            setReviewed([...reviewed, currentQuestion]);
        }
    };

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };
    const [postQuizEnd] = usePostQuizEndMutation()
    const handleSubmit = () => {
        postQuizEnd(parms?.mocktest)
        setIsSubmitted(true); // 🔥 End quiz and show result
    };

    // 🔥 Result Page
    if (isSubmitted) {
        const score = Object.keys(answers).length;
        return (
            <QuizResult quizQuestionAnswer={quizQuestionAnswer} />
        );
    }
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading quiz</p>;

    return (
        <div>
            <div className="fixed top-0  mx-auto left-0 right-0 bg-white z-50">
                <div className="bg-f4a text-2xl text-white ">
                    <div className=" max-w-7xl mx-auto flex justify-between py-5">
                        <h2>Global Learner Den</h2>
                        <a href="http://localhost:5000/quiz/e03548ee-c7f8-40db-bf8d-746af24db355">X</a>
                    </div>
                </div>
                <div className="container max-w-7xl mx-auto bg-white py-3">
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-semibold text-[#2E2E48]">Algebra and Functions Quiz</h1>
                        <Timer secondsLeft={secondsLeft} />
                    </div>

                    <MockProgressBar answeredCount={Object.keys(answers).length} total={questions?.length}
                        onReviewToggle={markAsReview}
                        isReviewed={reviewed.includes(currentQuestion)}
                    />
                    <MockQuestionNavigator
                        questions={questions}
                        currentQuestion={currentQuestion}
                        answers={answers}
                        reviewed={reviewed}
                        setCurrentQuestion={setCurrentQuestion}
                    />
                </div>
            </div>
            <div className="py-5" style={{ paddingTop: '230px' }}>
                <MockQuestionAnswer
                    question={questions && questions[currentQuestion]}
                    currentAnswer={answers[currentQuestion]}
                    onAnswer={handleAnswer}
                />
                <NavigationButtons
                    onPrevious={handlePrevious}
                    onNext={currentQuestion === questions?.length - 1 ? handleSubmit : handleNext} // 🔥 Submit on last      
                    isLast={currentQuestion === questions?.length - 1} // 🔥 Pass down to change button text
                />
            </div>
        </div>

    );
};

export default MockTest;
