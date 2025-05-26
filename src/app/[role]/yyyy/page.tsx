"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Dropdown from "@/component/Dropdown/Dropdown";
import clsx from "clsx";

type FormValues = {
  pdfFormat: string;
  subject: string;
  board: string;
  grade: string;
  quizSubject: string;
  quizTags: string;
};

export default function AddQuizModal() {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="fixed inset-0 z-50 bg-white overflow-y-auto p-6 sm:p-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Add Quiz</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Select PDF Format */}
        <div className="col-span-2">
          <label htmlFor="pdfFormat" className="block font-medium mb-2">
            Select PDF Format *
          </label>
          <div className="flex gap-6" id="pdfFormat">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                id="extract"
                value="extract"
                {...register("pdfFormat", { required: true })}
              />
              Extract Quizzes
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                id="generate"
                value="generate"
                {...register("pdfFormat", { required: true })}
              />
              Generate Quizzes
            </label>
          </div>
          {errors.pdfFormat && (
            <p className="text-red-500 text-sm mt-1">This field is required.</p>
          )}
        </div>

        {/* File Upload Placeholder */}
        <div className="col-span-2 border-dashed border-2 border-gray-300 rounded-lg p-6 text-center">
          <p className="text-gray-500">+ Add New File</p>
          <p className="text-xs text-gray-400">
            Files Supported: PDF, Image, PPT, DOCX/DOC (max 20MB)
          </p>
        </div>

        {/* Quiz For */}
        <div className="col-span-2">
          <label className="block font-medium mb-2">Select Quiz For</label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="quizFor"
                value="syllabus"
                defaultChecked
              />
              Syllabus
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="quizFor" value="competitive" />
              Competitive Exams
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="quizFor" value="language" />
              Foreign Language
            </label>
          </div>
        </div>

        {/* Board Dropdown */}
        <Dropdown
          control={control}
          name="board"
          label="Select Board *"
          options={[
            { label: "CBSE", value: "cbse" },
            { label: "ICSE", value: "icse" },
            { label: "State Board", value: "state" },
          ]}
          placeholder="Please Select Subject"
          isWritable={false}
          showValue={true}
          required
          isShowerror
          error={errors.board?.message}
        />

        {/* Grade Dropdown */}
        <Dropdown
          control={control}
          name="grade"
          label="Select Grade *"
          options={[
            { label: "Grade 6", value: "6" },
            { label: "Grade 7", value: "7" },
            { label: "Grade 8", value: "8" },
          ]}
          placeholder="Please Select Grade"
          isWritable={false}
          showValue={true}
          required
          isShowerror
          error={errors.grade?.message}
        />

        {/* Subject Dropdown */}
        <div>
          <Dropdown
            control={control}
            name="subject"
            label="Select Subject *"
            options={[
              { label: "Math", value: "math" },
              { label: "Science", value: "science" },
              { label: "English", value: "english" },
            ]}
            placeholder="Please Select Subject"
            isWritable={false}
            showValue={true}
            required
            isShowerror
            error={errors.subject?.message}
          />
          {errors.subject && (
            <p className="text-red-500">{errors.subject.message}</p>
          )}
        </div>
        {/* Quiz Tag Input */}
        <div>
          <label className="block text-sm mb-2">Quiz Tagging</label>
          <input
            type="text"
            placeholder="Enter Quiz Tags"
            {...register("quizTags", { required: "Quiz Tags are required" })}
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
        <div className="col-span-2 flex justify-end gap-4 pt-6">
          <button
            type="button"
            className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg"
          >
            Save as Draft
          </button>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg"
          >
            Extract Quiz
          </button>
        </div>
      </form>
    </div>
  );
}
