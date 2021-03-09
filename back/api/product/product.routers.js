"use strict";

const { Router } = require("express");
const productControllers = require("./product.controllers");
const productRouter = Router();

productRouter.get("/", productControllers.listCategory);

productRouter.get("/:categoryId", productControllers.getById);

productRouter.post("/", productControllers.addCategory);

productRouter.post("/:categoryId", productControllers.addProductCategory);

productRouter.delete("/:categoryId", productControllers.removeCategory);

productRouter.patch("/:categoryId", productControllers.updateCategory);

module.exports = productRouter;
