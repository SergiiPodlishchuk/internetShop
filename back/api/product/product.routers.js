"use strict";

const { Router } = require("express");
const productControllers = require("./product.controllers");
const productRouter = Router();

productRouter.get("/", productControllers.listCategory);

productRouter.get("/:categoryId", productControllers.getById);

productRouter.post("/", productControllers.addCategory);
productRouter.delete("/:categoryId", productControllers.removeCategory);
productRouter.patch("/:categoryId", productControllers.updateCategory);

productRouter.post("/:categoryId", productControllers.addProductCategory);
productRouter.delete(
  "/:categoryId/:productId",
  productControllers.removeProductCategory
);
productRouter.patch(
  "/:categoryId/:productId",
  productControllers.updateProductCategory
);

module.exports = productRouter;
