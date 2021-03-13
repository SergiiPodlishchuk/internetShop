"use strict";

const { Router } = require("express");
const basketControllers = require("./basket.controllers");
const basketRouter = Router();

basketRouter.get("/", basketControllers.getAllBasket);
basketRouter.post("/", basketControllers.addOrder);
basketRouter.delete("/:orderId", basketControllers.removeOrder);

module.exports = basketRouter;
