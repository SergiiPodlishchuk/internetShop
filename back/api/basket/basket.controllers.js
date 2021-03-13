"use strict";

const basketModel = require("./basket.model");
// const Joi = require("joi");
const {
  Types: { ObjectId },
} = require("mongoose");

async function getAllBasket(req, res, next) {
  try {
    const listBasket = await basketModel.find();
    return res.status(200).json(listBasket);
  } catch (error) {
    next(error);
  }
}

async function getById(req, res, next) {
  try {
    const categoryId = req.params.orderId;
    const contactById = await basketModel.findById(categoryId);

    if (!contactById) {
      return res.status(404).send();
    }

    return res.status(200).json(contactById);
  } catch (error) {
    next(error);
  }
}

async function addOrder(req, res, next) {
  try {
    console.log(req.body);
    const categoryCreate = await basketModel.create(req.body);
    return res.status(201).json(categoryCreate);
  } catch (error) {
    next(error);
  }
}

async function removeOrder(req, res, next) {
  try {
    const categoryId = req.params.orderId;
    const deleteContact = await basketModel.findByIdAndDelete(categoryId);

    if (!deleteContact) {
      return res.status(404).send();
    }

    return res.status(204).json(deleteContact);
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
  getAllBasket,
  getById,
  addOrder,
  removeOrder,

  //   validateId,
  //   validateContact,
  //   validateUpdateContact,
};
