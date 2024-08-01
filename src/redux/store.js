import { configureStore } from "@reduxjs/toolkit";
import formReducer, { saveStateMiddleware } from "./slice/formSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saveStateMiddleware),
});

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
