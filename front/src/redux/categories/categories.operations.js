import axios from "axios";
import categoriesActions from "./categories.actions";

axios.defaults.baseURL = "http://localhost:7777";

const fetchCategories = () => async (dispatch) => {
  dispatch(categoriesActions.getAllCategoryRequest());
  await axios
    .get("/")
    .then(({ data }) => {
      return dispatch(categoriesActions.getAllCategorySuccess(data));
    })
    .catch((error) => dispatch(categoriesActions.getAllCategoryError(error)));
};

const addCategories = (reqBody) => async (dispatch) => {
  dispatch(categoriesActions.addCategoryRequest());
  await axios
    .post("/", reqBody)
    .then(({ data }) => dispatch(categoriesActions.addCategorySuccess(data)))
    .catch((error) => dispatch(categoriesActions.addCategoryError(error)));
};

const deleteCategories = (categoryId) => async (dispatch) => {
  dispatch(categoriesActions.deleteCategoryRequest());
  await axios
    .delete(`/${categoryId}`)
    .then(() => dispatch(categoriesActions.deleteCategorySuccess(categoryId)))
    .catch((error) => dispatch(categoriesActions.deleteCategoryError(error)));
};

const updateCategories = (reqBody) => async (dispatch) => {
  dispatch(categoriesActions.getAllCategoryRequest());
  await axios
    .patch("/categoryId", reqBody)
    .then(({ data }) => dispatch(categoriesActions.getAllCategorySuccess(data)))
    .catch((error) => dispatch(categoriesActions.getAllCategoryError(error)));
};

export default {
  fetchCategories,
  addCategories,
  deleteCategories,
  updateCategories,
};
