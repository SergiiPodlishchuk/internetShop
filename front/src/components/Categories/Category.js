import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import categoriesActions from "../../redux/categories/categories.actions";

import categoriesOperations from "../../redux/categories/categories.operations";

import s from "./Category.module.css";

const Category = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [inputName, setInputName] = React.useState("");
  const [inputImageUrl, setImageUrl] = React.useState("");

  React.useEffect(() => {
    (async function () {
      await dispatch(categoriesOperations.fetchCategories(dispatch));
    })();
  }, [dispatch]);

  const categoryList = useSelector((state) => state.categories.categories);

  const productsListOpen = (e) => {
    const categoryId = e.target.parentElement.id;
    dispatch(categoriesActions.categoriesId(categoryId));
    history.push("/products");
  };

  const addCategory = (e) => {
    e.preventDefault();
    const newCategory = {
      categoryName: inputName,
      image: inputImageUrl,
      products: [],
    };
    dispatch(categoriesOperations.addCategories(newCategory));
  };

  const deleteCategory = (e) => {
    e.preventDefault();
    const categoryId = e.target.parentElement.id;
    dispatch(categoriesOperations.deleteCategories(categoryId));
  };

  return (
    <>
      <ul className={s.categoryList}>
        {categoryList.map((category) => {
          return (
            <li key={category._id} className={s.categoryItem} id={category._id}>
              <img
                src={category.image}
                alt={category.categoryName}
                width={200}
              />
              <div>{category.categoryName}</div>
              <button
                className={s.buttonToProducts}
                type="button"
                onClick={productsListOpen}
              >
                Перейти к списку запчастей
              </button>
              <button onClick={deleteCategory}>удалить категорию</button>
            </li>
          );
        })}
      </ul>
      <form onSubmit={addCategory}>
        <input
          type="text"
          value={inputName}
          placeholder="Введите название категории"
          required
          onChange={(e) => setInputName(e.target.value)}
        />
        <input
          type="text"
          value={inputImageUrl}
          placeholder="Вставте ссылку на изображение"
          required
          onChange={(e) => setImageUrl(e.target.value)}
        />

        <button>Добавить категорию</button>
      </form>
    </>
  );
};

export default Category;
