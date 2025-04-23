"use client";

import Modal from "@/component/Modal/Modal";
import QuestionEditor from "@/routes/Admin/quiz/QuestionEditor";
import { useState } from "react";

export default function MyForm() {
  const [modal, setModal] = useState<Boolean>(true)

  return (
    <>
    {modal && 
    <Modal header="Edit Question 1" width="720px"  onClose={() => setModal(false)}>
      <QuestionEditor />
    </Modal>
    }
    </>
  );
}
