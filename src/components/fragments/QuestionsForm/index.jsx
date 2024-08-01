import { Info } from "lucide-react";
import styles from "../styles/QuestionsForm.module.css";
import { Clock10 } from "lucide-react";

const QuestionsForm = () => {
  const question = "How satisfied are you with our customer service?";
  const answers = ["Very satisfied", "Somewhat satisfied", "Not satisfied"];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <p>Question 1 of 10</p>
        </div>
        <div>
          <Clock10 size={25} color="darkgrey" />
          <p>10:00</p>
        </div>
      </div>
      <div className={styles.content}>
        <h2>{question}</h2>
        <div className={styles.info}>
          <Info size={20} />
          <p>Select one answer</p>
        </div>
        <div className={styles.answers}>
          {answers &&
            answers.map((answer, index) => (
              <label key={index} className={styles.customRadio}>
                <input
                  type="radio"
                  name="answer"
                  value={answers}
                  // checked={answer === "Somewhat satisfied"}
                  hidden
                />
                <span className={styles.radioButton} />
                <span className={styles.radioText}>{answer}</span>
              </label>
            ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionsForm;
