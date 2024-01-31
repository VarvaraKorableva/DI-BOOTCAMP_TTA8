import { configureStore } from "@reduxjs/toolkit";

import tasksReducer from "../features/Tasks/tasksSlice";
import categoriesReducer from "../features/Category/CategoriesSlice";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    categories: categoriesReducer,
  },
});

export default store;