import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Language {
  id?: string;
  name: string;
  code: string;
  countryCode: string;
  isActive?: boolean;
}

export interface Grade {
  id?: string;
  name: string;
  isActive?: boolean;
}

export interface Subject {
  id?: string;
  name: string;
  isActive?: boolean;
}

export interface Board {
  id?: string;
  name: string;
  isActive?: boolean;
}

export interface TargetSkill {
  id?: string;
  name: string;
  isActive?: boolean;
}

interface ApiResponse<T> {
  success: boolean;
  data: {
    result: T[];
  };
}

export const masterApi = createApi({
  reducerPath: "masterApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/v1/masterService/",
  }),
  endpoints: (builder) => ({
    // Languages
    getLanguages: builder.query<ApiResponse<Language>, void>({
      query: () => "language/get",
    }),
    createLanguage: builder.mutation<Language, Omit<Language, "id">>({
      query: (newLanguage) => ({
        url: "language/create",
        method: "POST",
        body: newLanguage,
      }),
    }),

    // Grades
    getGrades: builder.query<ApiResponse<Grade>, void>({
      query: () => "grade/get",
    }),
    createGrade: builder.mutation<Grade, Omit<Grade, "id">>({
      query: (newGrade) => ({
        url: "grade/create",
        method: "POST",
        body: newGrade,
      }),
    }),

    // Subjects
    getSubjects: builder.query<ApiResponse<Subject>, void>({
      query: () => "subject/get",
    }),
    createSubject: builder.mutation<Subject, Omit<Subject, "id">>({
      query: (newSubject) => ({
        url: "subject/create",
        method: "POST",
        body: newSubject,
      }),
    }),

    // Boards
    getBoards: builder.query<ApiResponse<Board>, void>({
      query: () => "boardtype/get",
    }),
    createBoard: builder.mutation<Board, Omit<Board, "id">>({
      query: (newBoard) => ({
        url: "boardtype/create",
        method: "POST",
        body: newBoard,
      }),
    }),

    // Target Skills
    getTargetSkills: builder.query<ApiResponse<TargetSkill>, void>({
      query: () => "targetSkills/get",
    }),
    createTargetSkill: builder.mutation<TargetSkill, Omit<TargetSkill, "id">>({
      query: (newSkill) => ({
        url: "targetSkills/create",
        method: "POST",
        body: newSkill,
      }),
    }),
  }),
});

// Export hooks for all endpoints:
export const {
  useGetLanguagesQuery,
  useCreateLanguageMutation,

  useGetGradesQuery,
  useCreateGradeMutation,

  useGetSubjectsQuery,
  useCreateSubjectMutation,

  useGetBoardsQuery,
  useCreateBoardMutation,

  useGetTargetSkillsQuery,
  useCreateTargetSkillMutation,
} = masterApi;
