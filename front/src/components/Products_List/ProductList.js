import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import s from "./Productlist.module.css";

const ProductList = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const categories = useSelector((state) => state.categories.categories);
  const categoryId = useSelector((state) => state.categories.categoryId);
  const categoriChoose = categories.find(({ _id }) => _id === categoryId);
  const productsList = categoriChoose.products;

  // const productsListOpen = () => {
  //   history.push("/products");
  // };

  return (
    <>
      <ul className={s.productsList}>
        {productsList.map((product) => {
          return (
            <li key={product._id} className={s.productItem}>
              <img src={product.image} alt={product.categoryName} width={200} />
              <div>{product.name}</div>
              <p>{product.cost}</p>
              <p>{product.about}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ProductList;
