"use strict";
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const productRouter = require("./product/product.routers");
const basketRouter = require("./basket/basket.router");

const MONGODB =
  "mongodb+srv://podluy23:magazin12@cluster0.rn3qz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/basket", basketRouter);
app.use("/", productRouter);

(async function () {
  try {
    const connectDB = mongoose.connect(MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
      useFindAndModify: true,
    });

    if (connectDB) {
      console.log("\x1b[33m%s\x1b[0m", "Database connection successful");
    }
  } catch (error) {
    const err = new Error("Not connect db");
    return err;
  }
})();

app.listen(7777, () => {
  console.log("\x1b[36m%s\x1b[0m", `Server started listening on port 7777`);
});
