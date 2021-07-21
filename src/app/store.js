import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/counterSlicer.js";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
