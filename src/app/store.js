import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/filter/filterSlice";
export default configureStore({
  reducer: {
    filter: filterReducer,
  },
});
