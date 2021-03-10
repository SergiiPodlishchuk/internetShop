"use strict";
const mongoose = require("mongoose");

const { Schema } = mongoose;

const productSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String },
  cost: { type: Number, required: true },
  about: { type: String, required: true },
});

const categorySchema = new Schema({
  categoryName: { type: String, required: true },
  image: { type: String },
  products: [productSchema],
});

const productModel = mongoose.model("Products", categorySchema);

module.exports = productModel;
