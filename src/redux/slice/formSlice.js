import { createSlice } from "@reduxjs/toolkit";
import { getCurrentTimePlusMinutes } from "../../utils/utils";

const storedData = JSON.parse(localStorage.getItem("surveyForm"));
const initialData = storedData || [];

const initialState = {
  isFinishedSurvey: initialData?.isFinishedSurvey || false,
  isOngoingSurvey: initialData?.isOngoingSurvey || false,
  currentQuestion: initialData?.currentQuestion || 0,
  surveyAnswers: initialData?.surveyAnswers || [],
};

const setLocalStorageTimer = () => {
  const timer = getCurrentTimePlusMinutes(10);
  localStorage.setItem("timer", timer);
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    onStartSurvey: (state) => {
      setLocalStorageTimer();
      state.isOngoingSurvey = true;
      state.isFinishedSurvey = false;
      state.currentQuestion = 0;
      state.surveyAnswers = [];
    },
    onFinishSurvey: (state) => {
      state.isOngoingSurvey = false;
      state.isFinishedSurvey = true;
    },
    onChangeAnswer: (state, action) => {
      state.surveyAnswers[action.payload.index] = action.payload.answer;
    },
    onNextQuestions: (state) => {
      state.currentQuestion += 1;
    },
  },
});

export const {
  onStartSurvey,
  onFinishSurvey,
  onChangeAnswer,
  onNextQuestions,
} = formSlice.actions;

const saveStateMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  localStorage.setItem("surveyForm", JSON.stringify(store.getState().form));
  return result;
};

export default formSlice.reducer;
export { saveStateMiddleware };
