import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import categoriesActions from "./categories.actions";

const categories = createReducer([], {
  [categoriesActions.getAllCategorySuccess]: (state, action) => action.payload,
  [categoriesActions.addCategorySuccess]: (state, action) => [
    ...state,
    action.payload,
  ],
  [categoriesActions.deleteCategorySuccess]: (state, action) => {
    return state.filter(({ _id }) => _id !== action.payload);
  },
  [categoriesActions.updateCategorySuccess]: (state, action) => action.payload,
});

const categoryId = createReducer("", {
  [categoriesActions.categoriesId]: (state, action) => action.payload,
});

export default combineReducers({
  categories,
  categoryId,
});
