/* eslint-disable react-hooks/exhaustive-deps */
import { ContainerLayout, SurveyLayout } from "../../components/layouts";
import { Button, QuestionsForm } from "../../components/fragments";
import styles from "../styles/FormPages.module.css";
import { ArrowRight } from "lucide-react";
import { questions } from "../../data/questions";
import { useDispatch, useSelector } from "react-redux";
import { onFinishSurvey, onNextQuestions } from "../../redux/slice/formSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { warningDialog } from "../../utils/utils";

const FormPages = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { currentQuestion, isFinishedSurvey, surveyAnswers } = useSelector(
    (state) => state.form
  );

  const singleQuestion = questions.find((item) => item.id === currentQuestion);

  const handleChangeQuestions = () => {
    if (currentQuestion === 9) {
      dispatch(onFinishSurvey());
      navigate("/review");
    } else {
      dispatch(onNextQuestions());
    }
  };

  useEffect(() => {
    if (isFinishedSurvey) {
      warningDialog("You have finished the survey.", () => {
        navigate("/review");
      });
    }
  }, [isFinishedSurvey]);

  return (
    <ContainerLayout>
      <SurveyLayout text="Survey Form" className={styles.container}>
        <QuestionsForm data={singleQuestion} />
        <div className={styles.btnContainer}>
          <Button
            className={styles.btn}
            onClick={handleChangeQuestions}
            disabled={surveyAnswers[currentQuestion] === undefined}
          >
            <span>
              {currentQuestion === 9 ? "Finish Survey" : "Next Questions"}
            </span>
            <ArrowRight />
          </Button>
        </div>
      </SurveyLayout>
    </ContainerLayout>
  );
};

export default FormPages;
