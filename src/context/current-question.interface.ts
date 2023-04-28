import { Dispatch, SetStateAction } from "react";

export interface ICurrentQuestionContext {
    currentQuestionIndex: number;
    setCurrentQuestionIndex: Dispatch<SetStateAction<number>>;
}