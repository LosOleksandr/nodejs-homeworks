const Joi = require("joi");

const resendEmailSheme = Joi.object({
  email: Joi.string().required().email().messages({
    "string.base": `Email should be a type of string`,
    "string.empty": `Email cannot be an empty field`,
    "string.email": `Email format is invalid`,
    "any.required": `Email is a required field`,
  }),
});

module.exports = resendEmailSheme;
