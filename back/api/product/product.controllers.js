"use strict";

const productModel = require("./product.model");
// const Joi = require("joi");
const {
  Types: { ObjectId },
} = require("mongoose");

async function listCategory(req, res, next) {
  try {
    const listCategory = await productModel.find();
    return res.status(200).json(listCategory);
  } catch (error) {
    next(error);
  }
}

async function getById(req, res, next) {
  try {
    const categoryId = req.params.categoryId;
    const contactById = await contactModel.findById(categoryId);

    if (!contactById) {
      return res.status(404).send();
    }

    return res.status(200).json(contactById);
  } catch (error) {
    next(error);
  }
}

async function addCategory(req, res, next) {
  try {
    const categoryCreate = await productModel.create(req.body);
    return res.status(201).json(categoryCreate);
  } catch (error) {
    next(error);
  }
}

async function removeCategory(req, res, next) {
  try {
    const categoryId = req.params.categoryId;
    const deleteContact = await productModel.findByIdAndDelete(categoryId);

    if (!deleteContact) {
      return res.status(404).send();
    }

    return res.status(204).json(deleteContact);
  } catch (error) {
    next(error);
  }
}

async function updateCategory(req, res, next) {
  try {
    const categoryId = req.params.categoryId;

    console.log("request", req.body);
    const updateCategory = await productModel.findByIdAndUpdate(categoryId, {
      $set: req.body,
    });
    if (!updateCategory) {
      return res.status(404).send();
    }

    return res.status(204).send(updateCategory);
  } catch (error) {
    next(error);
  }
}

async function addProductCategory(req, res, next) {
  try {
    const categoryId = req.params.categoryId;
    const findCategory = await productModel.findByIdAndUpdate(
      categoryId,
      { $push: { products: req.body } },
      { new: true }
    );

    if (!findCategory) {
      return res.status(404).send();
    }

    return res.status(201).json(findCategory);
  } catch (error) {
    next(error);
  }
}
async function removeProductCategory(req, res, next) {
  try {
    const categoryId = req.params.categoryId;
    const productId = req.params.productId;

    const findCategory = await productModel.findByIdAndUpdate(
      categoryId,
      { $pull: { products: { _id: productId } } },
      { new: true }
    );

    if (!findCategory) {
      return res.status(404).send();
    }

    return res.status(201).json(findCategory);
  } catch (error) {
    next(error);
  }
}
async function updateProductCategory(req, res, next) {
  try {
    const categoryId = req.params.categoryId;
    const productId = req.params.productId;

    const findCategory = await productModel.findByIdAndUpdate(
      categoryId,
      { $set: { "products.$[product]": req.body } },
      {
        arrayFilters: [{ "product._id": productId }],
        new: true,
      }
    );

    if (!findCategory) {
      return res.status(404).send();
    }

    return res.status(201).json(findCategory);
  } catch (error) {
    next(error);
  }
}

// function validateId(req, res, next) {
//   const { contactId } = req.params;

//   if (!ObjectId.isValid(contactId)) {
//     return res.status(400).send();
//   }
//   next();
// }

// function validateContact(req, res, next) {
//   const validationRules = Joi.object({
//     name: Joi.string().required(),
//     email: Joi.string().required(),
//     phone: Joi.string().required(),
//     subscription: Joi.string().required(),
//     password: Joi.string().required(),
//   });
//   const val = validationRules.validate(req.body);
//   if (val.error) {
//     return res.status(400).send(val.error.details[0].message);
//   }
//   next();
// }
// function validateUpdateContact(req, res, next) {
//   const validationRules = Joi.object({
//     name: Joi.string(),
//     email: Joi.string(),
//     phone: Joi.string(),
//     subscription: Joi.string(),
//     password: Joi.string(),
//   });
//   const val = validationRules.validate(req.body);
//   if (val.error) {
//     return res.status(400).send(val.error.details[0].message);
//   }
//   next();
// }

module.exports = {
  listCategory,
  getById,
  addCategory,
  removeCategory,
  updateCategory,
  addProductCategory,
  removeProductCategory,
  updateProductCategory,
  //   validateId,
  //   validateContact,
  //   validateUpdateContact,
};
