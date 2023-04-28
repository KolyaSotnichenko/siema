import { FC } from "react";
import { IStep } from "./step.interface";
import cn from "classnames";
import MoneyRectangleIcon from "@/assets/icons/MoneyRectangleIcon";

import styles from "./Step.module.scss";

const Step: FC<IStep> = ({ text, active, disabled }) => {
  return (
    <div
      className={cn(
        active && [styles.active, styles.step],
        disabled && [styles.disabled, styles.step],
        styles.step
      )}
    >
      <MoneyRectangleIcon width={240} height={40} className={styles.border} />
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default Step;
