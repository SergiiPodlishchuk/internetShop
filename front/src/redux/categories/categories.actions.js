import { createAction } from "@reduxjs/toolkit";

const getAllCategoryRequest = createAction("category/getRequest");
const getAllCategorySuccess = createAction("category/getSuccess");
const getAllCategoryError = createAction("category/getError");

const addCategoryRequest = createAction("category/addRequest");
const addCategorySuccess = createAction("category/addSuccess");
const addCategoryError = createAction("category/addError");

const deleteCategoryRequest = createAction("category/deleteRequest");
const deleteCategorySuccess = createAction("category/deleteSuccess");
const deleteCategoryError = createAction("category/deleteError");

const updateCategoryRequest = createAction("category/updateRequest");
const updateCategorySuccess = createAction("category/updateSuccess");
const updateCategoryError = createAction("category/updateError");

const categoriesId = createAction("category/getId");

export default {
  getAllCategoryRequest,
  getAllCategorySuccess,
  getAllCategoryError,

  addCategoryRequest,
  addCategorySuccess,
  addCategoryError,

  deleteCategoryRequest,
  deleteCategorySuccess,
  deleteCategoryError,

  updateCategoryRequest,
  updateCategorySuccess,
  updateCategoryError,

  categoriesId,
};
