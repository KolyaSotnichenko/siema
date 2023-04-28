import { FC } from "react";
import Link from "next/link";

import styles from "./Button.module.scss";

interface IButton {
  title: string;
  link: string;
}

const Button: FC<IButton> = ({ title, link }) => {
  return (
    <Link href={link} className={styles.button}>
      {title}
    </Link>
  );
};

export default Button;
