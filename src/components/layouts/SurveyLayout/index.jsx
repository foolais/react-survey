/* eslint-disable react/prop-types */
import style from "../styles/SurveyLayout.module.css";

const SurveyLayout = (props) => {
  const { children, text, className } = props;
  return (
    <div className={`${style.container} ${className}`}>
      <h1>{text}</h1>
      {children}
    </div>
  );
};

export default SurveyLayout;
