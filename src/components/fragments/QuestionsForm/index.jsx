/* eslint-disable react/prop-types */
import { Clock10, Info } from "lucide-react";
import styles from "../styles/QuestionsForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { onChangeAnswer } from "../../../redux/slice/formSlice";
import { Timer } from "../../fragments";
import { TriangleAlert } from "lucide-react";

const QuestionsForm = (props) => {
  const { data, type = "form" } = props;
  const dispatch = useDispatch();

  const { surveyAnswers, isFinishedSurvey } = useSelector(
    (state) => state.form
  );

  const handleSelectedAnswer = (answer) => {
    const selectedAnswer = surveyAnswers?.[data?.id];
    return selectedAnswer === answer?.value;
  };

  const handleChangeAnswer = (answer) => {
    if (type === "form")
      dispatch(onChangeAnswer({ index: data?.id, answer: answer.value }));
  };

  const isEmptyAnswer = () => {
    const selectedAnswer = surveyAnswers?.[data?.id];
    return selectedAnswer === undefined && type === "review";
  };

  return (
    <div
      className={`${styles.container} ${
        type === "review" ? styles.review : ""
      } ${isEmptyAnswer() ? styles.empty : styles.filled}`}
    >
      <div className={styles.header}>
        <div className={styles.questions}>
          {isEmptyAnswer() && isFinishedSurvey && (
            <TriangleAlert size={25} color="#d33" />
          )}
          <p>Question {data?.id + 1} of 10</p>
        </div>
        <div className={type === "review" ? styles.hiddenContent : ""}>
          <Clock10 size={25} color="darkgrey" />
          <Timer redirectUrl="/review" />
        </div>
      </div>
      <div className={styles.content}>
        <h2>{data?.question}</h2>
        <div className={type === "review" ? styles.hiddenContent : styles.info}>
          <Info size={20} />
          <p>Select one answer</p>
        </div>
        <div className={styles.answers}>
          {data &&
            data?.options?.map((answer, index) => (
              <label key={index} className={styles.customRadio}>
                <input
                  type="radio"
                  name={`answer_${data?.id}`}
                  value={answer.value}
                  checked={handleSelectedAnswer(answer)}
                  onChange={() => handleChangeAnswer(answer)}
                  disabled={type === "review"}
                  hidden
                />
                <span className={styles.radioButton} />
                <span className={styles.radioText}>{answer.text}</span>
              </label>
            ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionsForm;
