"use client";

import React, { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { PlusCircle, MinusCircle } from "lucide-react";
import { useCreateQuizInstructionsMutation, useGetQuizInstructionQuery } from "../../../../slices/admin/QuizSlice";

type FormValues = {
  description: string;
  instructions: { point: string }[];
};

const SetInstruction: React.FC<{ quizId: string }> = ({ quizId }) => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      description: "",
      instructions: [{ point: "" }],
    },
  });

  const { fields, append, remove, replace } = useFieldArray({
    control,
    name: "instructions",
  });

  const { data, isLoading, isSuccess, refetch } = useGetQuizInstructionQuery({ quizId });

  const [createQuizInstructions] = useCreateQuizInstructionsMutation();

  useEffect(() => {
    if (isSuccess && data?.data?.result) {
      const { description, instructions } = data.data.result;
  
      setValue("description", description || "");
  
      if (Array.isArray(instructions) && instructions.length > 0) {
        replace(instructions.map((point: string) => ({ point })));
      } else {
        // Reset to a single empty field if no instructions are returned
        replace([{ point: "" }]);
      }
    }
  }, [isSuccess, data, replace, setValue]);
  

  const onSubmit = async (data: FormValues) => {
    const payload = {
      description: data.description,
      instructions: data.instructions.map((item) => item.point),
    };
  
    console.log("Submitted Payload:", payload);
  
    try {
      const res = await createQuizInstructions({ quizId, ...payload }).unwrap();
      console.log("Instruction Saved:", res);
      refetch(); // Refetch latest instructions
    } catch (err) {
      console.error("Error saving instructions:", err);
    }
  };
  

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Description Field */}
      <div>
        <label className="block text-sm font-medium text-[#4F4AB0] mb-1">
          Description
        </label>
        <textarea
          {...register("description", {
            required: "Description is required",
          })}
          rows={3}
          placeholder="Enter description"
          className="w-full border border-gray-300 rounded-md px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-[#4F4AB0]"
        />
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">
            {errors.description.message}
          </p>
        )}
      </div>

      {/* Instruction Points */}
      {fields.map((field, index) => (
        <div key={field.id}>
          <label className="block text-sm font-medium text-[#4F4AB0] mb-1">
            Point {index + 1}
          </label>
          <div className="flex gap-2 items-start">
            <textarea
              {...register(`instructions.${index}.point`, {
                required: "Instruction point is required",
              })}
              rows={2}
              placeholder="Enter Instruction point (10-50 words)"
              className="flex-1 border border-gray-300 rounded-md px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-[#4F4AB0]"
            />
            {fields.length > 1 && (
              <button
                type="button"
                onClick={() => remove(index)}
                className="mt-2 text-red-500"
              >
                <MinusCircle size={20} />
              </button>
            )}
          </div>
          {errors.instructions?.[index]?.point && (
            <p className="text-red-500 text-sm mt-1">
              {errors.instructions[index]?.point?.message}
            </p>
          )}
        </div>
      ))}

      {/* Add Point */}
      <button
        type="button"
        onClick={() => append({ point: "" })}
        className="flex items-center text-[#4F4AB0] text-sm font-medium space-x-1"
      >
        <PlusCircle size={18} />
        <span>Add Point</span>
      </button>

      {/* Footer Actions */}
      <div className="flex justify-center gap-4 pt-6">
        {/* <Button
          type="button"
          variant="ghost"
          className="bg-[#E5E5E5] text-gray-700 px-12 py-3 rounded-full"
        >
          Cancel
        </Button> */}
        <Button
          type="submit"
          className="bg-[#4F4AB0] text-white px-20 py-4 rounded-full"
        >
          Save
        </Button>
      </div>
    </form>
  );
};

export default SetInstruction;
