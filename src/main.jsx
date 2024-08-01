import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import store from "./redux/store.js";
import { Provider } from "react-redux";
import { createBrowserRouter } from "react-router-dom";
import { HomePages, FormPages, ReviewPages, NotFoundPages } from "./pages";
import { RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <HomePages />, errorElement: <NotFoundPages /> },
  { path: "/form", element: <FormPages /> },
  { path: "/review", element: <ReviewPages /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
