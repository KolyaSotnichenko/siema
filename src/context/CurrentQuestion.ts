import { createContext } from "react";
import { ICurrentQuestionContext } from "./current-question.interface";

export const CurrentQuestion = createContext<ICurrentQuestionContext>({
    currentQuestionIndex: 0,
    setCurrentQuestionIndex: () => {},
})