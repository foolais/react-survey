import { CircleHelp } from "lucide-react";
import { Button } from "../../components/fragments";
import { ContainerLayout } from "../../components/layouts";
import styles from "../styles/HomePages.module.css";
import { Clock10 } from "lucide-react";

const HomePages = () => {
  return (
    <ContainerLayout>
      <div className={styles.container}>
        <h1>Start your survey</h1>
        <div className={styles.info}>
          <div className={styles.content}>
            <p>10 Questions</p>
            <CircleHelp size={25} />
          </div>
          <p>||</p>
          <div className={styles.content}>
            <p>10 Minutes</p>
            <Clock10 size={25} />
          </div>
        </div>
        <Button className={styles.btn}>Start</Button>
      </div>
    </ContainerLayout>
  );
};

export default HomePages;
