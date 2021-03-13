import {
  configureStore,
  // getDefaultMiddleware,
} from "@reduxjs/toolkit";

import categories from "./categories/categories.reducers";
// import isAdmin from "../redux/user";

export const store = configureStore({
  reducer: { categories },
});
