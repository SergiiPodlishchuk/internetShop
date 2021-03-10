import axios from "axios";
import React from "react";

import s from "./Category.module.css";

const Category = () => {
  const [categoryList, setList] = React.useState([]);

  React.useEffect(() => {
    async function getCategory() {
      await axios.get("http://localhost:7777").then((res) => {
        setList(res.data);
      });
    }
    getCategory();
  }, []);

  console.log(categoryList);

  return (
    <>
      <ul className={s.categoryList}>
        {categoryList.map((category) => {
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

export default Category;
