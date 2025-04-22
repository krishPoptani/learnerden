"use client";

import React from "react";
import QuestionWrapper from "@/component/Admin/quiz/Question/QuestionWrapper/QuestionWrapper";
import QuestionStatWrapper from "@/component/Admin/quiz/Question/QuestionStatsWrapper/QuestionStatsWrapper";



export default function MyForm() {


  return (
    <>
    <QuestionStatWrapper />
    <QuestionWrapper />
    </>
  );
}
