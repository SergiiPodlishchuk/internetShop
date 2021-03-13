"use strict";
const mongoose = require("mongoose");

const { Schema } = mongoose;

const basketSchema = new Schema({
  name: { type: String, required: true },
  female: { type: String, required: true },
  email: { type: String, required: true },
  tel: { type: String, required: true },
  sum: { type: Number, required: true },
  productList: [
    {
      nameProduct: { type: String, required: true },
      categoryProduct: { type: String, required: true },
      quantity: { type: Number, required: true },
    },
  ],
});

const basketModel = mongoose.model("Orders", basketSchema);

module.exports = basketModel;
