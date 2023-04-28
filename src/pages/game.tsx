import Layout from "@/components/layout/Layout";
import Game from "@/components/screens/game/Game";
import { CurrentQuestion } from "@/context/CurrentQuestion";
import { useQuestions } from "@/hooks/useQuestions";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import { useState } from "react";

const DynamicSteps = dynamic(import("../components/layout/Steps"), {
  ssr: false,
});

const GamePage: NextPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  const { questions, isLoading, isError } = useQuestions();

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        Loading...
      </div>
    );
  }

  if (isError) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          color: "red",
        }}
      >
        Error!
      </div>
    );
  }

  if (!questions) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        Questions not found!
      </div>
    );
  }

  return (
    <CurrentQuestion.Provider
      value={{ currentQuestionIndex, setCurrentQuestionIndex }}
    >
      <Layout>
        <Game questions={questions} />
        <DynamicSteps />
      </Layout>
    </CurrentQuestion.Provider>
  );
};

export default GamePage;
