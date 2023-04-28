import { FC } from "react";
import Image from "next/image";
import hand from "../../../../public/hand.svg";
import Button from "@/components/ui/Button";
import { withRouter } from "next/router";
import { WithRouterProps } from "next/dist/client/with-router";

import styles from "./Result.module.scss";

const Result: FC<WithRouterProps> = ({ router }) => {
  const { score } = router.query;

  return (
    <div className={styles.wrapper}>
      <Image className={styles.handIcon} alt="" src={hand} />
      <div className={styles.content}>
        <h2 className={styles.title}>Total score:</h2>
        <h1 className={styles.score}>
          ${Number(score)?.toLocaleString()} earned
        </h1>
        <Button title="Try again" link="/game" />
      </div>
    </div>
  );
};

export default withRouter(Result);
