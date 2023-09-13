const Joi = require("joi");
const { regex } = require("../../utils");

const contactScheme = Joi.object({
  name: Joi.string().required().messages({
    "string.base": `Name should be a type of string`,
    "string.empty": `Name cannot be an empty field`,
    "any.required": `Name is a required field`,
  }),
  email: Joi.string().required().email().messages({
    "string.base": `Email should be a type of string`,
    "string.empty": `Email cannot be an empty field`,
    "string.email": `Email format is invalid`,
    "any.required": `Email is a required field`,
  }),
  phone: Joi.string().required().pattern(regex.phoneRegex).messages({
    "string.base": `Phone should be a type of string`,
    "string.empty": `Phone cannot be an empty field`,
    "string.pattern.base": `Phone format is invalid`,
    "any.required": `Phone is a required field`,
  }),
  favorite: Joi.boolean(),
});

module.exports = contactScheme;
