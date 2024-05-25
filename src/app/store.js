import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

/**
 * This file is used for create and configure the Redux store using todoReducer as the root reducer.
 */

// Redux store configuration
export const store = configureStore({
  reducer: todoReducer,
});
