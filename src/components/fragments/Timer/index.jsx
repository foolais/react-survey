/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { warningDialog } from "../../../utils/utils";
import { useNavigate, useLocation } from "react-router-dom";
import { onFinishSurvey } from "../../../redux/slice/formSlice";
import { useDispatch, useSelector } from "react-redux";

const Timer = ({ redirectUrl }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const isFormPage = location.pathname === "/form";

  const [remainingTime, setRemainingTime] = useState(100000);

  const { isOngoingSurvey } = useSelector((state) => state.form);

  useEffect(() => {
    if (isFormPage) {
      const storedEndTimeTimestamp = localStorage.getItem("timer");

      if (storedEndTimeTimestamp) {
        const storedEndTime = new Date(storedEndTimeTimestamp);
        const now = new Date();
        const remainingTime = Math.max(storedEndTime - now, 0);
        setRemainingTime(remainingTime);
      }
      const intervalId = setInterval(() => {
        if (remainingTime > 0) {
          setRemainingTime((prevTime) => {
            const newTime = Math.max(prevTime - 1000, 0);
            if (newTime === 0) {
              clearInterval(intervalId);
            }
            return newTime;
          });
        }
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, []);

  useEffect(() => {
    if (remainingTime <= 0 && isOngoingSurvey) {
      warningDialog("Sorry, time is up!", () => {
        dispatch(onFinishSurvey());
        navigate(redirectUrl);
      });
    }
  }, [remainingTime, redirectUrl, dispatch, navigate]);

  const minutes = Math.floor(remainingTime / 60000);
  const seconds = Math.floor((remainingTime % 60000) / 1000);

  return (
    <div>
      {minutes < 10 ? `0${minutes}` : minutes}:
      {seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
};

export default Timer;
