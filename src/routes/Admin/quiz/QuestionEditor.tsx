"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useForm, Controller, useWatch } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useCreateQuizSurveyMutation, useUpdateQuizSurveyMutation } from "../../../../slices/QuizSlice";

const closeIcon = `/icons/BlackCloseBtn.png`;

type FormValues = {
  question: string;
  selectedAnswer: string;
  answers: string[]; // options
};

type QuestionEditorProps = {
  refetch : any,
  selectedQuestion: any
};

const QuestionEditor: React.FC<QuestionEditorProps> = ({ selectedQuestion,refetch }) => {
  const [createQuizSurvey] = useCreateQuizSurveyMutation();
const [updateQuizSurvey] = useUpdateQuizSurveyMutation();;
  const {
    control,
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      question: selectedQuestion?.question || "",
      selectedAnswer: selectedQuestion?.correctAnswer || "",
      answers: selectedQuestion?.answer?.length
      ? selectedQuestion.answer
      : ["", ""], // Ensure 2 empty options
    },
  });

  const answers = useWatch({ control, name: "answers" });

  useEffect(() => {
    if (selectedQuestion) {
      setValue("question", selectedQuestion.question);
      setValue("answers", selectedQuestion.answer || []);
      setValue("selectedAnswer", selectedQuestion.correctAnswer || "");
    }
  }, [selectedQuestion, setValue]);

  const updateAnswer = (index: number, value: string) => {
    const updated = [...answers];
    updated[index] = value;
    setValue("answers", updated);

    // If the updated answer changes the selected correct answer, reset it
    const selected = getValues("selectedAnswer");
    if (selected && !updated.includes(selected)) {
      setValue("selectedAnswer", "");
    }
  };

  const removeAnswer = (index: number) => {
    const updated = [...answers];
    const removed = updated.splice(index, 1)[0];
    setValue("answers", updated);

    // Deselect if removed option was selected
    if (removed === getValues("selectedAnswer")) {
      setValue("selectedAnswer", "");
    }
  };

  const { getValues } = useForm();

  const onSubmit = async (data: FormValues) => {
    if (!data.answers.includes(data.selectedAnswer)) {
      alert("Correct answer must be one of the options.");
      return;
    }
  
    const formatted = {
      quizId: selectedQuestion.quizId || "default-quiz-id",
      question: data.question,
      answer: data.answers,
      correctAnswer: data.selectedAnswer,
      number: parseInt(selectedQuestion.number) || 1,
    };
  
    try {
      if (selectedQuestion.id) {
        await updateQuizSurvey({ id: selectedQuestion.id, ...formatted }).unwrap();
        console.log("Updated successfully");
      } else {
        await createQuizSurvey(formatted).unwrap();
        console.log("Created successfully");
      }
  
      refetch();
    } catch (error) {
      console.error("Submission failed:", error);
    }
  };
  

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Question Field */}
      <div>
        <label className="block font-medium mb-2 text-sm text-gray-700">Question</label>
        <textarea
          rows={3}
          {...register("question", { required: true })}
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4F4AB0] resize-none"
        />
        {errors.question && <p className="text-red-500 text-sm">Question is required</p>}
      </div>

      {/* Answer Options */}
      <div className="space-y-3">
        {answers.map((ans, index) => (
          <div key={index} className="flex items-center gap-3 border border-[#D9D9D9] p-2 rounded-md">
            <Controller
              control={control}
              name="selectedAnswer"
              render={({ field }) => (
                <input
                  type="radio"
                  className="h-5 w-5"
                  value={ans}
                  checked={field.value === ans}
                  onChange={() => field.onChange(ans)}
                />
              )}
            />
            <input
              value={ans}
              onChange={(e) => updateAnswer(index, e.target.value)}
              placeholder={`Enter option ${index + 1}`}
              className="flex-1 outline-none"
            />
            <button
              type="button"
              onClick={() => removeAnswer(index)}
              className="text-red-500"
            >
              <Image src={closeIcon} width={16} height={16} alt="Remove" />
            </button>
          </div>
        ))}
      </div>

      {/* Save Button */}
      <div className="text-center pt-4">
        <Button
          type="submit"
          className="bg-[#4F4AB0] hover:bg-[#4F4AB0] text-white px-20 py-2 rounded-md"
        >
          Save
        </Button>
      </div>
    </form>
  );
};

export default QuestionEditor;



// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { useForm, Controller, useWatch } from "react-hook-form";
// import Dropdown from "@/component/Dropdown/Dropdown";
// import { Button } from "@/components/ui/button";

// const imagePlaceholder = `/icons/image-placeholder.png`;
// const deleteIcon = `/icons/redDeleteIcon.png`;
// const closeIcon = `/icons/BlackCloseBtn.png`;

// type FormValues = {
//   questiontype: string;
//   question: string;
//   selectedAnswer: string;
//   selectedAnswers: string[];
//   answers: string[]; // options
// };

// type QuestionEditorProps = {
//   selectedQuestion: {
//     id: string;
//     question: string;
//     answer: string[];
//     correctAnswer: string | string[];
//     image: string;
//     type: string;
//   };
// };

// const QuestionEditor: React.FC<QuestionEditorProps> = ({ selectedQuestion }) => {
//   const [imageFile, setImageFile] = useState<File | null>(null);
//   const [imagePreview, setImagePreview] = useState<string>(imagePlaceholder);

//   const {
//     control,
//     register,
//     handleSubmit,
//     setValue,
//     getValues,
//     watch,
//     formState: { errors },
//   } = useForm<FormValues>({
//     defaultValues: {
//       questiontype: selectedQuestion?.type === "quiz" ? "0" : "1",
//       question: selectedQuestion?.question || "",
//       selectedAnswer: "",
//       selectedAnswers: [],
//       answers: [],
//     },
//   });

//   const questionType = useWatch({ control, name: "questiontype" });

//   useEffect(() => {
//     if (selectedQuestion) {
//       setValue("question", selectedQuestion.question);
//       setValue("questiontype", selectedQuestion.type === "quiz" ? "0" : "1");
//       setValue("answers", selectedQuestion.answer || []);
//       setValue(
//         selectedQuestion.type === "quiz" ? "selectedAnswer" : "selectedAnswers",
//         selectedQuestion.correctAnswer
//       );
//       setImagePreview(selectedQuestion.image || imagePlaceholder);
//     }
//   }, [selectedQuestion, setValue]);

//   const onSubmit = (data: any) => {
//     const formatted = {
//       ...data,
//       correctAnswer:
//         data.questiontype === "0" ? data.selectedAnswer : data.selectedAnswers,
//       image: imagePreview,
//     };
//     console.log("Submitted:", formatted);
//   };

//   const answers = watch("answers");

//   const updateAnswer = (index: number, value: string) => {
//     const updated = [...answers];
//     updated[index] = value;
//     setValue("answers", updated);
//   };

//   const removeAnswer = (index: number) => {
//     const updated = [...answers];
//     updated.splice(index, 1);
//     setValue("answers", updated);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       {/* Question and Image Upload */}
//       <div className="flex justify-between gap-6">
//         <div className="flex-1">
//           <label className="block font-medium mb-2 text-sm text-gray-700">
//             Question
//           </label>
//           <textarea
//             rows={4}
//             className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4F4AB0] resize-none"
//             placeholder="Enter your question"
//             {...register("question")}
//           />
//         </div>

//         {/* <div className="w-60">
//           <label className="block font-medium mb-2 text-sm text-gray-700">
//             Upload Image
//           </label>
//           <div className="relative w-full border border-dashed border-gray-300 rounded-md px-4 py-6 text-center flex flex-col items-center justify-center text-sm text-gray-500 hover:border-[#4F4AB0] transition cursor-pointer">
//             <input
//               type="file"
//               accept="image/*"
//               onChange={(e) => {
//                 const file = e.target.files?.[0];
//                 if (file) {
//                   setImageFile(file);
//                   setImagePreview(URL.createObjectURL(file));
//                 }
//               }}
//               className="absolute inset-0 opacity-0 cursor-pointer"
//             />
//             {imagePreview !== imagePlaceholder && (
//               <div className="absolute top-2 right-2 flex space-x-2 z-10">
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setImageFile(null);
//                     setImagePreview(imagePlaceholder);
//                   }}
//                 >
//                   <Image src={deleteIcon} width={12} height={12} alt="Delete" />
//                 </button>
//               </div>
//             )}
//             <Image
//               src={imagePreview}
//               width={36}
//               height={36}
//               alt="Preview"
//               className="object-contain"
//             />
//             <span className="mt-2 text-xs text-[#4F4AB0] font-medium">
//               {imagePreview !== imagePlaceholder ? "Change Image" : "+ Add Question Image"}
//             </span>
//           </div>
//         </div> */}
//       </div>

//       {/* Question Type Dropdown */}
//       {/* <div>
//         <Dropdown
//           control={control}
//           name="questiontype"
//           label="Select Question Type"
//           options={[
//             { label: "Single Correct Question", value: "0" },
//             { label: "Multiple Correct Question", value: "1" },
//           ]}
//           placeholder="Please select question type"
//           isWritable={false}
//           showValue={true}
//           required
//           isShowerror
//           error={errors.questiontype?.message}
//         />
//         {errors.questiontype && (
//           <p className="text-red-500 text-sm">{errors.questiontype.message}</p>
//         )}
//       </div> */}

//       {/* Answer Options */}
//       <div className="space-y-4 pt-4">
//         {answers.map((ans, index) => {
//           const optionValue = `option${index}`;
//           const isSingle = questionType === "0";

//           return (
//             <div
//               key={`${index}-${questionType}`}
//               className="flex items-center gap-3 border border-[#D9D9D9] p-2 rounded-md"
//             >
//               <Controller
//                 control={control}
//                 name={isSingle ? "selectedAnswer" : "selectedAnswers"}
//                 render={({ field }) => (
//                   <input
//                     type={isSingle ? "radio" : "checkbox"}
//                     name="answer"
//                     className="h-5 w-5"
//                     value={ans}
//                     checked={
//                       isSingle
//                         ? field.value === ans
//                         : Array.isArray(field.value) &&
//                           field.value.includes(ans)
//                     }
//                     onChange={(e) => {
//                       if (isSingle) {
//                         field.onChange(ans);
//                       } else {
//                         const checked = e.target.checked;
//                         const valueArray = Array.isArray(field.value)
//                           ? field.value
//                           : [];
//                         const updated = checked
//                           ? [...valueArray, ans]
//                           : valueArray.filter((v: string) => v !== ans);
//                         field.onChange(updated);
//                       }
//                     }}
//                   />
//                 )}
//               />
//               <input
//                 value={ans}
//                 onChange={(e) => updateAnswer(index, e.target.value)}
//                 placeholder={`Enter option ${index + 1}`}
//                 className="flex-1 outline-none"
//               />
//               <button
//                 type="button"
//                 className="text-red-500"
//                 onClick={() => removeAnswer(index)}
//               >
//                 <Image
//                   src={closeIcon}
//                   width={16}
//                   height={16}
//                   alt="Close-Btn.png"
//                 />
//               </button>
//             </div>
//           );
//         })}
//       </div>

//       {/* Save Button */}
//       <div className="text-center pt-4">
//         <Button
//           type="submit"
//           className="bg-[#4F4AB0] hover:bg-[#4F4AB0] text-white px-20 py-2 rounded-md"
//         >
//           Save
//         </Button>
//       </div>
//     </form>
//   );
// };

// export default QuestionEditor;


// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { useForm, Controller, useWatch } from "react-hook-form";
// import Dropdown from "@/component/Dropdown/Dropdown";
// import { Button } from "@/components/ui/button";

// const imagePlaceholder = `/icons/image-placeholder.png`;
// const deleteIcon = `/icons/redDeleteIcon.png`;
// const editIcon = `/icons/BlueEditIcon.png`;
// const closeIcon = `/icons/BlackCloseBtn.png`;

// type FormValues = {
//   questiontype: string;
//   question: string;
//   selectedAnswer: string; // for radio
//   selectedAnswers: string[]; // for checkbox
// };

// const QuestionEditor = () => {
//   const {
//     control,
//     register,
//     handleSubmit,
//     setValue,
//     getValues,
//     watch,
//     formState: { errors },
//   } = useForm<FormValues>({
//     defaultValues: {
//       questiontype: "",
//       question: "",
//       selectedAnswer: "",
//       selectedAnswers: [],
//     },
//   });

//   const [imageFile, setImageFile] = useState<File | null>(null);
//   const [imagePreview, setImagePreview] = useState<string>(imagePlaceholder);

//   const questionType = useWatch({ control, name: "questiontype" });

//   const onSubmit = (data: any) => {
//     console.log("Submitted:", data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       {/* Question and Image Upload */}
//       <div className="flex justify-between gap-6">
//         {/* Question input */}
//         <div className="flex-1">
//           <label className="block font-medium mb-2 text-sm text-gray-700">
//             Question 1
//           </label>
//           <textarea
//             rows={4}
//             className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4F4AB0] resize-none"
//             placeholder="Enter your question"
//             {...register("question")}
//           />
//         </div>

//         {/* Upload Image */}
//         {/* Upload Image */}
//         <div className="w-60">
//           <label className="block font-medium mb-2 text-sm text-gray-700">
//             Upload Image
//           </label>

//           <div className="relative w-full border border-dashed border-gray-300 rounded-md px-4 py-6 text-center flex flex-col items-center justify-center text-sm text-gray-500 hover:border-[#4F4AB0] transition cursor-pointer">
//             {/* Hidden input for file selection */}
//             <input
//               type="file"
//               accept="image/*"
//               onChange={(e) => {
//                 const file = e.target.files?.[0];
//                 if (file) {
//                   setImageFile(file);
//                   setImagePreview(URL.createObjectURL(file));
//                 }
//               }}
//               className="absolute inset-0 opacity-0 cursor-pointer"
//             />

//             {/* Edit & Delete Icons */}
//             {imageFile && (
//               <div className="absolute top-2 right-2 flex space-x-2 z-10">
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setImageFile(null);
//                     setImagePreview(imagePlaceholder);
//                   }}
//                 >
//                   <Image src={deleteIcon} width={12} height={12} alt="Delete" />
//                 </button>
//               </div>
//             )}

//             {/* Image Preview */}
//             <Image
//               src={imagePreview}
//               width={36}
//               height={36}
//               alt="Preview"
//               className="object-contain"
//             />
//             <span className="mt-2 text-xs text-[#4F4AB0] font-medium">
//               {imageFile ? "Change Image" : "+ Add Question Image"}
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Dropdown */}
//       <div>
//         <Dropdown
//           control={control}
//           name="questiontype"
//           label="Select Question Type"
//           options={[
//             { label: "Single Correct Question", value: "0" },
//             { label: "Multiple Correct Question", value: "1" },
//           ]}
//           placeholder="Please Question Type"
//           isWritable={false}
//           showValue={true}
//           required
//           isShowerror
//           error={errors.questiontype?.message}
//         />
//         {errors.questiontype && (
//           <p className="text-red-500 text-sm">{errors.questiontype.message}</p>
//         )}
//       </div>

//       {/* Options */}
//       <div className="space-y-4 pt-4">
//         {[0, 1, 2, 3].map((_, index) => {
//           const optionValue = `option${index}`;
//           const isSingle = questionType === "0";

//           return (
//             <div
//               key={`${index}-${questionType}`}
//               className="flex items-center gap-3 border border-[#D9D9D9] p-2 rounded-md"
//             >
//               {/* ✅ Dynamic input */}
//               <Controller
//                 control={control}
//                 name={isSingle ? "selectedAnswer" : "selectedAnswers"}
//                 render={({ field }) => (
//                   <input
//                     type={isSingle ? "radio" : "checkbox"}
//                     name="answer" // same name to group radios
//                     className="h-5 w-5"
//                     value={optionValue}
//                     checked={
//                       isSingle
//                         ? field.value === optionValue
//                         : Array.isArray(field.value) &&
//                           field.value.includes(optionValue)
//                     }
//                     onChange={(e) => {
//                       if (isSingle) {
//                         field.onChange(optionValue); // NOT e.target.value
//                       } else {
//                         const checked = e.target.checked;
//                         const valueArray = Array.isArray(field.value)
//                           ? field.value
//                           : [];
//                         const updated = checked
//                           ? [...valueArray, optionValue]
//                           : valueArray.filter((v: string) => v !== optionValue);
//                         field.onChange(updated);
//                       }
//                     }}
//                   />
//                 )}
//               />

//               {/* Option Text Input */}
//               <input
//                 placeholder={`Enter option ${index + 1}`}
//                 className="flex-1 outline-none"
//               />

//               {/* Delete Button */}
//               <button type="button" className="text-red-500">
//                 <Image
//                   src={closeIcon}
//                   width={16}
//                   height={16}
//                   alt="Close-Btn.png"
//                 />
//               </button>
//             </div>
//           );
//         })}
//       </div>

//       {/* Save Button */}
//       <div className="text-center pt-4">
//         <Button
//           type="submit"
//           className="bg-[#4F4AB0] hover:bg-[#4F4AB0] text-white px-20 py-2 rounded-md"
//         >
//           Save
//         </Button>
//       </div>
//     </form>
//   );
// };

// export default QuestionEditor;
