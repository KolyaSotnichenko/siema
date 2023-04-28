import { FC } from "react";
import { IOptionBtn } from "./option-btn.interface";
import cn from "classnames";
import RectangleIcon from "@/assets/icons/RectangleIcon";

import styles from "./OptionBtn.module.scss";

const OptionBtn: FC<IOptionBtn> = ({
  letter,
  answer,
  selected,
  correct,
  wrong,
}) => {
  return (
    <div
      className={cn(
        selected && [styles.selected, styles.btn],
        correct && [styles.correct, styles.btn],
        wrong && [styles.wrong, styles.btn],
        styles.btn
      )}
    >
      <RectangleIcon height={72} width={373} className={styles.border} />
      <div className={styles.content}>
        <div className={styles.letterAnswer}>{letter}</div>
        <div className={styles.answer}>
          {(selected && "Selected") ||
            (correct && "Correct") ||
            (wrong && "Wrong") ||
            answer}
        </div>
      </div>
    </div>
  );
};

export default OptionBtn;
