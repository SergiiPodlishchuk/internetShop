import axios from "axios";
import React from "react";

import s from "./Productlist.module.css";

const Products = () => {
  return (
    <>
      <ul className={s.categoryList}>
        {productList.map((category) => {
          return (
            <li key={category._id} className={s.categoryItem}>
              <img
                src={category.image}
                alt={category.categoryName}
                width={200}
              />
              <div>{category.categoryName}</div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Products;
