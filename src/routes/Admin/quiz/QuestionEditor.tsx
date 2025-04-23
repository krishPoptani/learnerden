"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useForm, Controller, useWatch } from "react-hook-form";
import Dropdown from "@/component/Dropdown/Dropdown";
import { Button } from "@/components/ui/button";

const imagePlaceholder = `/icons/image-placeholder.png`;
const deleteIcon = `/icons/redDeleteIcon.png`;
const editIcon = `/icons/BlueEditIcon.png`;
const closeIcon = `/icons/BlackCloseBtn.png`;

type FormValues = {
  questiontype: string;
  question: string;
  selectedAnswer: string; // for radio
  selectedAnswers: string[]; // for checkbox
};

const QuestionEditor = () => {
  const {
    control,
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      questiontype: "",
      question: "",
      selectedAnswer: "",
      selectedAnswers: [],
    },
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>(imagePlaceholder);

  const questionType = useWatch({ control, name: "questiontype" });

  const onSubmit = (data: any) => {
    console.log("Submitted:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Question and Image Upload */}
      <div className="flex justify-between gap-6">
        {/* Question input */}
        <div className="flex-1">
          <label className="block font-medium mb-2 text-sm text-gray-700">
            Question 1
          </label>
          <textarea
            rows={4}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4F4AB0] resize-none"
            placeholder="Enter your question"
            {...register("question")}
          />
        </div>

        {/* Upload Image */}
        {/* Upload Image */}
        <div className="w-60">
          <label className="block font-medium mb-2 text-sm text-gray-700">
            Upload Image
          </label>

          <div className="relative w-full border border-dashed border-gray-300 rounded-md px-4 py-6 text-center flex flex-col items-center justify-center text-sm text-gray-500 hover:border-[#4F4AB0] transition cursor-pointer">
            {/* Hidden input for file selection */}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  setImageFile(file);
                  setImagePreview(URL.createObjectURL(file));
                }
              }}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />

            {/* Edit & Delete Icons */}
            {imageFile && (
              <div className="absolute top-2 right-2 flex space-x-2 z-10">
                <button
                  type="button"
                  onClick={() => {
                    setImageFile(null);
                    setImagePreview(imagePlaceholder);
                  }}
                >
                  <Image src={deleteIcon} width={12} height={12} alt="Delete" />
                </button>
              </div>
            )}

            {/* Image Preview */}
            <Image
              src={imagePreview}
              width={36}
              height={36}
              alt="Preview"
              className="object-contain"
            />
            <span className="mt-2 text-xs text-[#4F4AB0] font-medium">
              {imageFile ? "Change Image" : "+ Add Question Image"}
            </span>
          </div>
        </div>
      </div>

      {/* Dropdown */}
      <div>
        <Dropdown
          control={control}
          name="questiontype"
          label="Select Question Type"
          options={[
            { label: "Single Correct Question", value: "0" },
            { label: "Multiple Correct Question", value: "1" },
          ]}
          placeholder="Please Question Type"
          isWritable={false}
          showValue={true}
          required
          isShowerror
          error={errors.questiontype?.message}
        />
        {errors.questiontype && (
          <p className="text-red-500 text-sm">{errors.questiontype.message}</p>
        )}
      </div>

      {/* Options */}
      <div className="space-y-4 pt-4">
        {[0, 1, 2, 3].map((_, index) => {
          const optionValue = `option${index}`;
          const isSingle = questionType === "0";

          return (
            <div
              key={`${index}-${questionType}`}
              className="flex items-center gap-3 border border-[#D9D9D9] p-2 rounded-md"
            >
              {/* ✅ Dynamic input */}
              <Controller
                control={control}
                name={isSingle ? "selectedAnswer" : "selectedAnswers"}
                render={({ field }) => (
                  <input
                    type={isSingle ? "radio" : "checkbox"}
                    name="answer" // same name to group radios
                    className="h-5 w-5"
                    value={optionValue}
                    checked={
                      isSingle
                        ? field.value === optionValue
                        : Array.isArray(field.value) &&
                          field.value.includes(optionValue)
                    }
                    onChange={(e) => {
                      if (isSingle) {
                        field.onChange(optionValue); // NOT e.target.value
                      } else {
                        const checked = e.target.checked;
                        const valueArray = Array.isArray(field.value)
                          ? field.value
                          : [];
                        const updated = checked
                          ? [...valueArray, optionValue]
                          : valueArray.filter((v: string) => v !== optionValue);
                        field.onChange(updated);
                      }
                    }}
                  />
                )}
              />

              {/* Option Text Input */}
              <input
                placeholder={`Enter option ${index + 1}`}
                className="flex-1 outline-none"
              />

              {/* Delete Button */}
              <button type="button" className="text-red-500">
                <Image
                  src={closeIcon}
                  width={16}
                  height={16}
                  alt="Close-Btn.png"
                />
              </button>
            </div>
          );
        })}
      </div>

      {/* Save Button */}
      <div className="text-center pt-4">
        <Button
          type="submit"
          className="bg-[#4F4AB0] text-white px-20 py-2 rounded-md"
        >
          Save
        </Button>
      </div>
    </form>
  );
};

export default QuestionEditor;
