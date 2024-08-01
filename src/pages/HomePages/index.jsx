import { CircleHelp, Clock10 } from "lucide-react";
import { Button } from "../../components/fragments";
import { ContainerLayout } from "../../components/layouts";
import styles from "../styles/HomePages.module.css";
import { useDispatch, useSelector } from "react-redux";
import { onStartSurvey } from "../../redux/slice/formSlice";
import { useNavigate } from "react-router-dom";
import { RotateCcw, Newspaper, ArrowRight } from "lucide-react";
import { isEmptyLocalStorage } from "../../utils/utils";

const HomePages = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isOngoingSurvey } = useSelector((state) => state.form);

  const handleStartSurvey = () => {
    try {
      dispatch(onStartSurvey());
      navigate("/form");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContainerLayout>
      <div className={styles.container}>
        <h1>Share your tech insights</h1>
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
        <div className={styles.btnContainer}>
          {isEmptyLocalStorage() ? (
            <Button onClick={handleStartSurvey} className={styles.btn}>
              <span>Start Survey</span>
              <ArrowRight size={20} />
            </Button>
          ) : isOngoingSurvey ? (
            <Button className={styles.btn} onClick={() => navigate("/form")}>
              <span>Continue Survey</span>
              <ArrowRight size={20} />
            </Button>
          ) : (
            <>
              <Button
                onClick={handleStartSurvey}
                className={`${styles.btn} ${styles.btnRetake}`}
              >
                <span>Retake Survey</span>
                <RotateCcw size={20} />
              </Button>
              <Button
                className={styles.btn}
                onClick={() => navigate("/review")}
              >
                <span>Review Survey</span>
                <Newspaper size={20} />
              </Button>
            </>
          )}
        </div>
      </div>
    </ContainerLayout>
  );
};

export default HomePages;
