/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom";
import { Button, QuestionsForm } from "../../components/fragments";
import { ContainerLayout, SurveyLayout } from "../../components/layouts";
import { questions } from "../../data/questions";
import styles from "../styles/ReviewPages.module.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  isEmptyLocalStorage,
  showConfirmationDialog,
  warningDialog,
} from "../../utils/utils";
import { onStartSurvey } from "../../redux/slice/formSlice";
import { RotateCcw, Home } from "lucide-react";

const ReviewPages = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const listQuestions = questions;

  const { isOngoingSurvey } = useSelector((state) => state.form);

  useEffect(() => {
    if (isOngoingSurvey) {
      warningDialog("You haven't finished the survey yet.", () => {
        navigate("/");
      });
    } else if (isEmptyLocalStorage()) {
      warningDialog("You haven't taken the survey yet.", () => {
        navigate("/");
      });
    }
  }, [isOngoingSurvey]);

  const handleRetakeSurvey = () => {
    showConfirmationDialog(
      "Are you sure you want to retake the survey?",
      () => {
        dispatch(onStartSurvey());
        navigate("/form");
      }
    );
  };

  return (
    <ContainerLayout>
      <SurveyLayout text="Survey Review" className={styles.container}>
        <div className={styles.contentContainer}>
          {listQuestions.map((item, index) => (
            <QuestionsForm key={index} type="review" data={item} />
          ))}
        </div>
        <div className={styles.btnContainer}>
          <Button className={styles.btn} onClick={handleRetakeSurvey}>
            <span>Retake</span>
            <RotateCcw size={20} />
          </Button>
          <Button className={styles.btn} onClick={() => navigate("/")}>
            <span>Home</span>
            <Home size={20} />
          </Button>
        </div>
      </SurveyLayout>
    </ContainerLayout>
  );
};

export default ReviewPages;
