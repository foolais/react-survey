import { ContainerLayout, SurveyLayout } from "../../components/layouts";
import { Button, QuestionsForm } from "../../components/fragments";
import styles from "../styles/FormPages.module.css";
import { ArrowRight } from "lucide-react";

const FormPages = () => {
  return (
    <ContainerLayout>
      <SurveyLayout text="Survey Form" className={styles.container}>
        <QuestionsForm />
        <div className={styles.btnContainer}>
          <Button className={styles.btn}>
            <span>Next Question</span>
            <ArrowRight />
          </Button>
        </div>
      </SurveyLayout>
    </ContainerLayout>
  );
};

export default FormPages;
