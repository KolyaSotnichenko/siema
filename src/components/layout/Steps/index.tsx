import { FC, useContext } from "react";
import { CurrentQuestion } from "@/context/CurrentQuestion";
import { useQuestions } from "@/hooks/useQuestions";
import Step from "@/components/ui/Step";

import styles from "./Steps.module.scss";

const Steps: FC = () => {
  const { currentQuestionIndex } = useContext(CurrentQuestion);

  const { questions, isLoading, isError } = useQuestions();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error!</div>;
  }

  if (!questions) {
    return <div>Questions not found!</div>;
  }

  return (
    <div className={styles.wrapper}>
      <ul className={styles.steps}>
        {questions.map((item, index, array) => (
          <li key={index}>
            <Step
              key={index}
              active={index === currentQuestionIndex}
              disabled={
                (index > 0 && array[index - 1].id < currentQuestionIndex) ||
                (index === 0 && array[index]?.id < currentQuestionIndex + 1)
              }
              text={`$${item.money.toLocaleString()}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Steps;
