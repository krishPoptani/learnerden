"use client"

import { showAlertPopupError } from "@/component/AlertPopup/Alert"
import Loader from "@/component/Loader/Loader"
import Modal from "@/component/Modal/Modal"
import QuestionEditor from "@/routes/Admin/quiz/QuestionEditor"
import { useEffect, useState } from "react"

export default function MyForm() {
  const [modal, setModal] = useState<boolean>(true)

  useEffect(() => {
    if (modal) {
      showAlertPopupError("Something went wrong", "Please try again later")
    }
  }, [modal])

  return (
    <>
      {modal && <Loader />}
    </>
  )
}

