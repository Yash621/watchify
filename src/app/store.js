import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlicer.js";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
