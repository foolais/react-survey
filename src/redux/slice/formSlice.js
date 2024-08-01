import { createSlice } from "@reduxjs/toolkit";

const storedData = JSON.parse(localStorage.getItem("surveyForm"));
const initialData = storedData || [];

const initialState = {
  isFinishedSurvey: initialData?.isFinishedSurvey || false,
  isOngoingSurvey: initialData?.isOngoingSurvey || false,
  currentQuestion: initialData?.currentQuestion || 0,
  answers: initialData?.answers || [],
  timer: initialData?.timer || 10,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    onStartSurvey: (state) => {
      state.isOngoingSurvey = true;
      state.isFinishedSurvey = false;
    },
    onFinishSurvey: (state) => {
      state.isOngoingSurvey = false;
      state.isFinishedSurvey = true;
    },
  },
});

export const { onStartSurvey, onFinishSurvey } = formSlice.actions;

const saveStateMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  localStorage.setItem("surveyForm", JSON.stringify(store.getState().form));
  return result;
};

export default formSlice.reducer;
export { saveStateMiddleware };
