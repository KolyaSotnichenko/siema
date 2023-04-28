import { FC } from "react";
import Image from "next/image";
import hand from "../../../../public/hand.svg";
import Button from "@/components/ui/Button";

import styles from "./Welcome.module.scss";

const Welcome: FC = () => {
  return (
    <div className={styles.background}>
      <div className={styles.wrapper}>
        <Image className={styles.handIcon} alt="" src={hand} />
        <div className={styles.content}>
          <h1 className={styles.text}>Who wants to be a millionaire?</h1>
          <Button title="Start" link="/game" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
