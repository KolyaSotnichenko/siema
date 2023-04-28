import React, { useContext, useState } from "react";
import OptionBtn from "../../ui/OptionBtn";
import { IQuestion } from "./game.interface";
import { CurrentQuestion } from "@/context/CurrentQuestion";
import { useRouter } from "next/router";
import BurgerIcon from "@/assets/icons/BurgerIcon";
import dynamic from "next/dynamic";
import CloseIcon from "@/assets/icons/CloseIcon";

import styles from "./Game.module.scss";

const DynamicSteps = dynamic(import("../../layout/Steps"), {
  ssr: false,
});

interface IProps {
  questions: IQuestion[];
}

const Game: React.FC<IProps> = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [correct, setCorrect] = useState<number | null>(null);
  const [wrong, setWrong] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { setCurrentQuestionIndex } = useContext(CurrentQuestion);

  const router = useRouter();

  const letters = ["A", "B", "C", "D", "E", "F", "G"];

  const handleOptionClick = (index: number) => {
    setSelectedOption(index);

    setTimeout(() => {
      if (index === questions[currentQuestion].answer) {
        setCorrect(questions[currentQuestion].answer);
        setSelectedOption(null);
        setScore(score + questions[currentQuestion].money);
      } else {
        setWrong(index);
        setSelectedOption(null);
        setCorrect(null);
        router.push({ pathname: "/result", query: { score } });
      }
    }, 2000);

    setTimeout(() => {
      setSelectedOption(null);
      setCorrect(null);
      setWrong(null);
      if (currentQuestion > questions.length) {
        router.push({ pathname: "/result", query: { score } });
      }

      console.log(score);
      setCurrentQuestion(currentQuestion + 1);
      setCurrentQuestionIndex(currentQuestion + 1);
    }, 4000);
  };

  return (
    <div>
      <div className={styles.menuIcon} onClick={() => setIsOpen(!isOpen)}>
        <BurgerIcon />
      </div>
      {isOpen && (
        <div className={styles.menu}>
          <div className={styles.menuIcon} onClick={() => setIsOpen(!isOpen)}>
            <CloseIcon />
          </div>
          <DynamicSteps />
        </div>
      )}
      <div className={styles.content}>
        <h2 className={styles.question}>
          {questions[currentQuestion].question}
        </h2>
        <ul className={styles.options}>
          {questions[currentQuestion].options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(index)}>
              <OptionBtn
                key={index}
                letter={letters[index]}
                answer={option}
                selected={selectedOption === index}
                correct={correct === index}
                wrong={wrong === index}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Game;
