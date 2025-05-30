"use client";

import React, { useEffect } from "react";
import { useForm, SubmitHandler, useWatch } from "react-hook-form";
import Dropdown from "@/component/Dropdown/Dropdown";
import clsx from "clsx";
import {
  useCreateQuizMutation,
  useCreateQuizQuestionsMutation,
  useGetBoardsQuery,
  useGetGradesQuery,
  useGetLanguagesQuery,
  useGetOneQuizQuery,
  useGetSubjectsQuery,
} from "../../../../slices/QuizSlice";
import Loader from "@/component/Loader/Loader";
import axios from "axios";
import { getUserInfo } from "@/utils/user.util";
type FormValues = {
  pdfFormat: string;
  subject: string;
  board: string;
  grade: string;
  quizSubject: string;
  quizTitle: string;
  quizTags: string;
  noOfQuiz: number;
  quizFor: string;
  quizFile: FileList;
};
interface AddQuizModalProps {
  setAddQuizModal: (value: boolean) => void;
  // quizId?: string; // optional for prefill
}


const backBtn = `/icons/backbtn.svg`;
const add_quiz = `/icons/add_quizfolder.png`;

export default function AddQuizModal({ setAddQuizModal,
  // quizId 
}: AddQuizModalProps) {
  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const { data: languages, isLoading, error } = useGetLanguagesQuery();
  const [createQuiz, { isLoading: isCreating }] = useCreateQuizMutation();
  const [createQuizQuestions, { isLoading: creatingQuestions }] = useCreateQuizQuestionsMutation()
  const user = getUserInfo()
  const {
    data: grades,
    isLoading: gradesLoading,
    error: gradeError,
  } = useGetGradesQuery();
  const {
    data: boards,
    isLoading: boardsLoading,
    error: boardError,
  } = useGetBoardsQuery();
  const {
    data: subjects,
    isLoading: subjectsLoading,
    error: subjectError,
  } = useGetSubjectsQuery();
  const languageOptions =
    languages?.data?.result?.map((lang) => ({
      label: `${lang.name} (${lang.code.toUpperCase()})`,
      value: lang.id,
    })) || [];
  const gradeOptions =
    grades?.data?.result?.map((grade) => ({
      label: `${grade.name}`,
      value: grade.id,
    })) || [];
  const boardOptions =
    boards?.data?.result?.map((board) => ({
      label: `${board.name}`,
      value: board.id,
    })) || [];
  const subjectsOptions =
    subjects?.data?.result?.map((subject) => ({
      label: `${subject.name}`,
      value: subject.id,
    })) || [];
  // const {
  //   data: quizData,
  //   isSuccess: quizLoaded,
  // } = useGetOneQuizQuery(
  //   { id: quizId, offset: 1, limit: 10 },
  //   { skip: !quizId }
  // );
  const pptresponse = {
    "results": [
      {
        "file": "Is Matter Around Us Pure.pdf",
        "status": "success",
        "questions": [
          {
            "question": "What is matter?",
            "options": [
              "Anything that has mass and occupies space",
              "Anything that can change state",
              "Anything that is visible",
              "Anything that can conduct electricity"
            ],
            "correctAnswer": "Anything that has mass and occupies space"
          },
          {
            "question": "Which of the following is a pure substance?",
            "options": [
              "Air",
              "Water",
              "Sugar solution",
              "Sand and salt mixture"
            ],
            "correctAnswer": "Water"
          },
          {
            "question": "What type of mixture is air?",
            "options": [
              "Homogeneous",
              "Heterogeneous",
              "Compound",
              "Colloid"
            ],
            "correctAnswer": "Homogeneous"
          },
          {
            "question": "What is an element?",
            "options": [
              "A substance made of only one kind of atom",
              "A mixture of two or more substances",
              "A compound of different molecules",
              "A solution with uniform properties"
            ],
            "correctAnswer": "A substance made of only one kind of atom"
          },
          {
            "question": "Which of the following is a compound?",
            "options": [
              "Iron",
              "Oxygen",
              "Water",
              "Gold"
            ],
            "correctAnswer": "Water"
          },
          {
            "question": "Which process is used to separate colors in a dye?",
            "options": [
              "Filtration",
              "Chromatography",
              "Distillation",
              "Crystallization"
            ],
            "correctAnswer": "Chromatography"
          },
          {
            "question": "What is the Tyndall effect?",
            "options": [
              "Scattering of light by particles in a colloid",
              "Separation of mixtures by boiling",
              "Formation of crystals from a solution",
              "Absorption of light by a compound"
            ],
            "correctAnswer": "Scattering of light by particles in a colloid"
          },
          {
            "question": "What is an example of a suspension?",
            "options": [
              "Muddy water",
              "Salt water",
              "Sugar solution",
              "Air"
            ],
            "correctAnswer": "Muddy water"
          },
          {
            "question": "Which method is used to separate two immiscible liquids?",
            "options": [
              "Distillation",
              "Filtration",
              "Use of a separating funnel",
              "Chromatography"
            ],
            "correctAnswer": "Use of a separating funnel"
          },
          {
            "question": "What is crystallization used for?",
            "options": [
              "To purify a solid substance",
              "To mix two liquids",
              "To separate gases",
              "To dissolve a solid"
            ],
            "correctAnswer": "To purify a solid substance"
          },
          {
            "question": "What are metalloids?",
            "options": [
              "Elements with properties of both metals and non-metals",
              "Pure substances made of only one kind of atom",
              "Mixtures of metals and non-metals",
              "Compounds of metals"
            ],
            "correctAnswer": "Elements with properties of both metals and non-metals"
          },
          {
            "question": "What is the main characteristic of a homogeneous mixture?",
            "options": [
              "Uniform composition",
              "Visible separation boundaries",
              "Variable composition",
              "Different phases"
            ],
            "correctAnswer": "Uniform composition"
          },
          {
            "question": "Which of the following is an example of a colloid?",
            "options": [
              "Jelly",
              "Salt water",
              "Sand",
              "Oil"
            ],
            "correctAnswer": "Jelly"
          },
          {
            "question": "What is the main difference between mixtures and compounds?",
            "options": [
              "Mixtures can be separated by physical methods",
              "Compounds have variable composition",
              "Mixtures have fixed boiling points",
              "Compounds show properties of constituents"
            ],
            "correctAnswer": "Mixtures can be separated by physical methods"
          },
          {
            "question": "What is the role of a filter paper in filtration?",
            "options": [
              "To hold the liquid part",
              "To separate solid particles",
              "To evaporate the solvent",
              "To mix the solution"
            ],
            "correctAnswer": "To separate solid particles"
          },
          {
            "question": "Which process separates components of a mixture based on boiling points?",
            "options": [
              "Distillation",
              "Filtration",
              "Chromatography",
              "Crystallization"
            ],
            "correctAnswer": "Distillation"
          },
          {
            "question": "In fractional distillation, what helps separate mixed components?",
            "options": [
              "Fractionating column",
              "Filter paper",
              "Chromatography paper",
              "Evaporating dish"
            ],
            "correctAnswer": "Fractionating column"
          },
          {
            "question": "Which of the following is an application of chromatography?",
            "options": [
              "To separate colors in a dye",
              "To purify water",
              "To separate gases",
              "To crystallize salt"
            ],
            "correctAnswer": "To separate colors in a dye"
          },
          {
            "question": "What is the result of the crystallization process?",
            "options": [
              "Formation of pure crystals",
              "Mixing of two solutions",
              "Formation of a homogeneous mixture",
              "Evaporation of all liquid"
            ],
            "correctAnswer": "Formation of pure crystals"
          },
          {
            "question": "Which method is suitable for separating miscible liquids with a small boiling point difference?",
            "options": [
              "Fractional distillation",
              "Simple distillation",
              "Filtration",
              "Chromatography"
            ],
            "correctAnswer": "Fractional distillation"
          }
        ]
      }
    ]
  }


  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const formData = new FormData();

    if (data.quizFile?.[0]) {
      formData.append("files", data.quizFile[0]);
    } else {
      console.error("No file selected.");
      return;
    }

    try {
      // 1. Create Quiz API
      const quizPayload = {
        quizLanguage: "b26a1c05-96f2-4671-9f40-9954445fe2bd",
        topic: data.quizTitle || "Untitled Quiz",
        userId: user?.id, // You can update to dynamic if needed
        quizType: "93bd1ddc-8d93-4643-92a2-ab17d4345483",
        quizCreationType: "AI",
        boardType: data.board || "93bd1ddc-8d93-4643-92a2-ab17d4345483",
        grade: data.grade || "113662b8-ac00-4eec-a6b9-90d424e1d7ce",
        subject: data.subject || "3dae1de6-f67c-4629-9ef3-5fe989f50973",
        targetSkill: "62783de4-1b4c-4186-bf1d-fa927312243e",
        quizReason: "Test",
        totalQuiz: data.noOfQuiz || 4,
        quizLevel: "1",
        quizTag: data.quizTags || "Medical",
        description: "Test Description",
      };

      const createRes = await createQuiz(quizPayload).unwrap();
      // 2.Extract API from AI services 
      // const uploadRes = await axios.post(
      //   "https://node.aieducationpro.com/api/v1/aiService/quiz/generate",
      //   formData,
      //   {
      //     headers: {
      //       "Content-Type": "multipart/form-data",
      //     },
      //   }
      // );

      // const fileUploadData = uploadRes?.data?.results?.data;
      // console.log("Upload success:", fileUploadData);

      // 2. Prepare and send quiz creation data
      console.log("Quiz created successfully:", createRes);
      const payloadBulk = {
        quizId: createRes?.data?.result?.id,
        data: pptresponse?.results?.[0]?.questions
      }
      let res = await createQuizQuestions(payloadBulk)
      // 3. Bulk Create API -> 28 in Quiz Selling API

      // Optional: close modal or show success message
      setAddQuizModal(false);
    } catch (error) {
      console.error("Error creating quiz:", error);
    }
  };


  // useEffect(() => {
  //   if (quizLoaded && quizData?.data?.result && quizData.data?.result?.[0]) {
  //     const quiz = quizData.data?.result?.[0];
  //     reset({
  //       pdfFormat: quiz.quizCreationType?.toLowerCase() || "extract",
  //       subject: quiz.subject,
  //       board: quiz.boardType,
  //       grade: quiz.grade,
  //       quizTitle: quiz.topic || "",
  //       quizTags: quiz.quizTag || "",
  //       noOfQuiz: quiz.totalQuiz,
  //       quizFor: getQuizForFromReason(quiz.quizReason),
  //     });
  //   }
  // }, [quizLoaded, quizData, reset]);

  // // utility to map quizReason back to your `quizFor` radio
  // const getQuizForFromReason = (reason: string) => {
  //   if (reason === "Test") return "syllabus";
  //   if (reason === "Competitive") return "competitive";
  //   if (reason === "Language") return "language";
  //   return "syllabus"; // default
  // };

  const uploadedFile = useWatch({ control, name: "quizFile" });
  const hasFile = uploadedFile?.length > 0;

  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <div className="fixed inset-0 bg-white flex flex-col h-screen z-[9999]">
        {/* Sticky Header */}
        <div
          className="w-full py-7 flex-shrink-0  text-white"
          style={{ background: "linear-gradient(to right, #3E4FBB, #C32E6B)" }}
        >
          <div className="max-w-7xl w-full mx-auto flex items-center justify-start px-4 text-2xl">
            <span
              className="mr-4 cursor-pointer"
              onClick={() => {
                setAddQuizModal(false);
              }}
            >
              <img src={backBtn} alt="Back Btn" />
            </span>{" "}
            Add Quiz
          </div>
        </div>

        {/* Scrollable Form Area */}
        <div className="mt-4 flex-1 overflow-y-auto scrollbar-hide">
          <div className="w-full px-4 max-w-7xl mx-auto py-4 pt-6 shadow-md">
            <div className="w-full">
              <div
                className="text-[18px] font-semibold border-b border-b-[#A0A0A0] pb-2 mb-8 w-full pr-4"
                style={{
                  background: "linear-gradient(to right, #3E4FBB, #C32E6B)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                By Uploading File
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid w-full grid-cols-1 md:grid-cols-2 gap-6"
              >
                {/* Select PDF Format */}
                <div className="col-span-2">
                  <div className="flex gap-6 max-w-5xl items-center justify-between">
                    <div className="text-sm">
                      Select PDF Format <span className="text-red-500">*</span>
                    </div>
                    <label className="flex items-center gap-2 text-sm text-[#4E4E4E]">
                      <input
                        type="radio"
                        value="extract"
                        {...register("pdfFormat", { required: true })}
                      />
                      Extract Quizzes
                    </label>
                    <label className="flex items-center gap-2 text-sm text-[#4E4E4E]">
                      <input
                        type="radio"
                        value="generate"
                        {...register("pdfFormat", { required: true })}
                      />
                      Generate Quizzes
                    </label>
                  </div>
                  {errors.pdfFormat && (
                    <p className="text-red-500 text-sm mt-1">
                      This field is required.
                    </p>
                  )}
                </div>

                {/* File Upload Placeholder */}

                <div className="col-span-2">
                  <div className="text-sm mb-2 ml-1">Describe Your Quiz</div>

                  <label
                    htmlFor="quizFile"
                    className={`border-2 rounded-lg p-4 flex flex-col items-center cursor-pointer transition-all duration-200
      ${hasFile
                        ? "border-[#4F4AB0] bg-[#F0F4FF]"
                        : "border-dashed border-gray-300"
                      }
    `}
                  >
                    <img src={add_quiz} width={24} height={24} alt="Add Quiz" />
                    <p
                      className={`text-sm ${hasFile
                        ? "text-[#4F4AB0] font-semibold"
                        : "text-[#4F4AB0]"
                        }`}
                    >
                      {hasFile ? "File Selected" : "+ Add New File"}
                    </p>
                    <p className="text-xs text-gray-400">
                      Files Supported: PDF(max 20MB)
                    </p>
                    {hasFile && (
                      <p className="text-xs mt-1 text-gray-600">
                        {uploadedFile[0]?.name}
                      </p>
                    )}
                  </label>

                  <input
                    type="file"
                    id="quizFile"
                    accept=".pdf"
                    {...register("quizFile", {
                      required: "File is required",
                      validate: {
                        lessThan20MB: (files) =>
                          files[0]?.size < 20 * 1024 * 1024 ||
                          "Max file size is 20MB",
                      },
                    })}
                    className="hidden"
                  />

                  {errors.quizFile && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.quizFile.message}
                    </p>
                  )}
                </div>

                {/* Quiz For */}
                <div>
                  <label className="block text-sm mb-2">Select Quiz For</label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 text-sm text-[#4E4E4E]">
                      <input
                        type="radio"
                        value="syllabus"
                        {...register("quizFor", { required: true })}
                        defaultChecked
                      />
                      Syllabus
                    </label>
                    <label className="flex items-center gap-2 text-sm text-[#4E4E4E]">
                      <input
                        type="radio"
                        value="competitive"
                        {...register("quizFor", { required: true })}
                      />
                      Competitive Exams
                    </label>
                    <label className="flex items-center gap-2 text-sm text-[#4E4E4E]">
                      <input
                        type="radio"
                        value="language"
                        {...register("quizFor", { required: true })}
                      />
                      Foreign Language
                    </label>
                  </div>
                  {errors.quizFor && (
                    <p className="text-red-500 text-sm mt-1">
                      This field is required.
                    </p>
                  )}
                </div>
                <div></div>
                <div>
                  <label className="block text-sm mb-2 text-[#4E4E4E]">
                    Quiz Title <span className="text-sm text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Quiz Title"
                    {...register("quizTitle", {
                      required: "Quiz Title are required",
                    })}
                    className={clsx(
                      "w-full bg-transparent h-[50px] rounded-lg border text-sm px-3 focus:outline-none",
                      errors.quizTitle ? "border-red-500" : "border-[#A0A0A0]"
                    )}
                  />
                  {errors.quizTitle && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.quizTitle.message}
                    </p>
                  )}
                </div>

                {/* Board Dropdown */}
                <div>
                  <Dropdown
                    control={control}
                    name="board"
                    label="Select Board"
                    options={boardOptions}
                    placeholder="Please Select Subject"
                    isWritable={false}
                    showValue={true}
                    required
                    isShowerror
                    error={errors.board?.message}
                  />
                  {errors.board && (
                    <p className="text-red-500 text-sm">
                      {errors.board.message}
                    </p>
                  )}
                </div>

                {/* Grade Dropdown */}
                <div>
                  <Dropdown
                    control={control}
                    name="grade"
                    label="Select Grade"
                    options={gradeOptions}
                    placeholder="Please Select Grade"
                    isWritable={false}
                    showValue={true}
                    required
                    isShowerror
                    error={errors.grade?.message}
                  />
                  {errors.grade && (
                    <p className="text-red-500 text-sm">
                      {errors.grade.message}
                    </p>
                  )}
                </div>

                {/* Subject Dropdown */}
                <div>
                  <Dropdown
                    control={control}
                    name="subject"
                    label="Select Subject"
                    options={subjectsOptions}
                    placeholder="Please Select Subject"
                    isWritable={false}
                    showValue={true}
                    required
                    isShowerror
                    error={errors.subject?.message}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Subject Dropdown */}
                <div>
                  <label className="block text-sm text-[#4E4E4E] mb-2">
                    No.of.Quiz
                    {/* <span className="text-sm text-red-500">*</span> */}
                  </label>
                  <input
                    type="number"
                    placeholder="Enter No. of Quiz"
                    {...register("noOfQuiz")}
                    className={clsx(
                      "w-full bg-transparent h-[50px] rounded-lg border text-sm px-3 focus:outline-none",
                      errors.noOfQuiz ? "border-red-500" : "border-[#A0A0A0]"
                    )}
                  />
                  {errors.noOfQuiz && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.noOfQuiz.message}
                    </p>
                  )}
                </div>
                {/* Quiz Tag Input */}
                <div>
                  <label className="block text-sm mb-2 text-[#4E4E4E]">
                    Quiz Tagging
                    {/* <span className="text-sm text-red-500">*</span> */}
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Quiz Tags"
                    {...register("quizTags")}
                    className={clsx(
                      "w-full bg-transparent h-[50px] rounded-lg border text-sm px-3 focus:outline-none",
                      errors.quizTags ? "border-red-500" : "border-[#A0A0A0]"
                    )}
                  />
                  {errors.quizTags && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.quizTags.message}
                    </p>
                  )}
                </div>

                {/* Submit Buttons */}
                <div className="col-span-2 flex justify-center gap-10 pt-6">
                  <button
                    type="button"
                    className="bg-gray-300 text-gray-800 w-[300px] py-4 rounded-full"
                  >
                    Save as Draft
                  </button>
                  <button
                    type="submit"
                    className="bg-[#4F4AB0] text-white w-[300px] py-4 rounded-full"
                  >
                    Extract Quiz
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
