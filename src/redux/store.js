import { configureStore } from "@reduxjs/toolkit";
import formReducer, { saveStateMiddleware } from "./slice/formSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saveStateMiddleware),
});

export default store;
