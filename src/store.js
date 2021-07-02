import { configureStore } from "@redux/toolkit";
import counterReducer from "../features/counterSlicer";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
