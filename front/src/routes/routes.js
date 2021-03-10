/* eslint-disable import/no-anonymous-default-export */
import { lazy } from "react";

export default [
  {
    path: "/categories",
    label: "Home",
    exact: true,
    component: lazy(() =>
      import(
        "../components/Categories/Category.js" /* webpackChunkName: "home-page" */
      )
    ),
    private: false,
    restricted: true,
  },
  {
    path: "/products",
    label: "Products_List",
    exact: true,
    component: lazy(() =>
      import(
        "../components/Products_List/ProductList.js" /* webpackChunkName: "login" */
      )
    ),
    private: false,
    restricted: true,
  },
  {
    path: "/infoProduct",
    label: "InfoProduct",
    exact: true,
    component: lazy(() =>
      import(
        "../components/InfoProduct/InfoProduct.js"
        /* webpackChunkName: "register" */
      )
    ),
    private: false,
    restricted: true,
  },
  {
    path: "/basket",
    label: "Basket",
    exact: true,
    component: lazy(() =>
      import(
        "../components/Basket/Basket.js" /* webpackChunkName: "calculator" */
      )
    ),
    private: false,
    restricted: true,
  },
  {
    path: "/adminpanel",
    label: "Admin_panel",
    exact: true,
    component: lazy(() =>
      import(
        "../components/Admin_panel/Adminpanel.js" /* webpackChunkName: "diary" */
      )
    ),
    private: true,
    restricted: true,
  },
];
