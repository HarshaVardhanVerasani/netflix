import { configureStore } from "@reduxjs/toolkit";
import netflix from "./slice";

const store = configureStore({
  reducer: {
    netflix,
  },
});
export default store;
