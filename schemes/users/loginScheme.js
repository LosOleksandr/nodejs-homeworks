const Joi = require("joi");

const loginScheme = Joi.object({
  email: Joi.string().required().messages({
    "string.base": `Email should be a type of string`,
    "string.empty": `Email cannot be an empty field`,
    "any.required": `Email is a required field`,
  }),
  password: Joi.string().required().messages({
    "string.base": `Password should be a type of string`,
    "string.empty": `Password cannot be an empty field`,
    "any.required": `Password is a required field`,
  }),
})
  .unknown(false)
  .messages({
    "object.unknown": "Only email and password fields are allowed",
  });

module.exports = loginScheme;
