"use client";

import React from "react";
import { useForm, SubmitHandler, useWatch } from "react-hook-form";
import Dropdown from "@/component/Dropdown/Dropdown";
import clsx from "clsx";
import {
  useGetBoardsQuery,
  useGetGradesQuery,
  useGetLanguagesQuery,
  useGetSubjectsQuery,
} from "../../../../slices/QuizSlice";
import Loader from "@/component/Loader/Loader";
type FormValues = {
  pdfFormat: string;
  subject: string;
  board: string;
  grade: string;
  quizSubject: string;
  quizTitle : string;
  quizTags: string;
  noOfQuiz: number;
  quizFor: string;
  quizFile: FileList;
};

interface AddQuizModalProps {
  setAddQuizModal: (value: boolean) => void;
}

const backBtn = `/icons/backbtn.svg`;
const add_quiz = `/icons/add_quizfolder.png`;

export default function AddQuizModal({ setAddQuizModal }: AddQuizModalProps) {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<FormValues>();

  const { data: languages, isLoading, error } = useGetLanguagesQuery();
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
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form Data:", data);
  };

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
      ${
        hasFile
          ? "border-[#4F4AB0] bg-[#F0F4FF]"
          : "border-dashed border-gray-300"
      }
    `}
                  >
                    <img src={add_quiz} width={24} height={24} alt="Add Quiz" />
                    <p
                      className={`text-sm ${
                        hasFile
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
                    placeholder="Enter Quiz Tags"
                    {...register("quizTitle", {
                      required: "Quiz Tags are required",
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
