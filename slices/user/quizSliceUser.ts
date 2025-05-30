import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { hostUrl } from '@/utils/baseUrl';

export const QuizUserApi = createApi({
    reducerPath: 'QuizUserApi',
    baseQuery: fetchBaseQuery({
        baseUrl: hostUrl,
        prepareHeaders: (headers) => {
            if (typeof window !== 'undefined') {
                const tokenString = localStorage.getItem('token');
                if (tokenString) {
                    try {
                        const currentToken: string = JSON.parse(tokenString);
                        headers.set('Authorization', `Bearer ${currentToken}`);
                    } catch (e) {
                        console.warn('Token parsing failed:', e);
                    }
                }
            }
            headers.set('Content-Type', 'application/json');
            headers.set('ngrok-skip-browser-warning', 'true');
            return headers;
        },
    }),
    tagTypes: ['QuizType'],
    endpoints: (builder) => ({

        getOneGradeQuizDetails: builder.query({
            query: ({ offset, limit, id }) => ({
                url: `masterService/grade/get-One-grade-QuizDetails?offset=${offset}&limit=${limit}&id=${id}`,
                method: "GET",
            }),
        }),
        quizQuestionAnswer: builder.query({
            query: ({ attemptId }) => ({
                url: `masterService/quiz-result/quiz?attemptId=${attemptId}`,
                method: "GET",
            }),
            providesTags: (result) => [{ type: 'QuizType', id: 'LIST' }],
        }),
        postQuizAnswerQuestion: builder.mutation({
            query: (data) => ({
                url: `masterService/quiz-result/answer-question`,
                method: "POST",
                body: data
            }),
        }),
        getQuizInstruction: builder.query({
            query: ({ quizId }) => ({
                url: `masterService/quiz-instructions/get?quizId=${quizId}`,
                method: "GET",
            }),
        }),
        postQuizStart: builder.mutation({
            query: (data) => ({
                url: `masterService/quiz-result/start-quiz`,
                method: "POST",
                body: data
            }),
        }),
        postQuizEnd: builder.mutation({
            query: (attemptId) => ({
                url: `masterService/quiz-result/end-quiz?attemptId=${attemptId}`,
                method: "POST"
            }),
            invalidatesTags: ['QuizType'],

        }),
        getOneUserViewQuizDetails: builder.query({
            query: ({ id }) => ({
                url: `masterService/quiz-details/get-oneUserView-QuizDetails?id=${id}`,
                method: "GET",
            }),
        }),
    }),
});
export const {
    useGetOneGradeQuizDetailsQuery,
    useQuizQuestionAnswerQuery,
    usePostQuizAnswerQuestionMutation,
    useGetQuizInstructionQuery,
    usePostQuizStartMutation,
    usePostQuizEndMutation,
    useGetOneUserViewQuizDetailsQuery,
} = QuizUserApi;
