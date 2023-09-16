const Joi = require("joi");
const { regex } = require("../../utils");

const signupScheme = Joi.object({
  username: Joi.string().required().min(2).max(20).messages({
    "string.base": `Username should be a type of string`,
    "string.empty": `Username cannot be an empty field`,
    "string.min": `Username should have a minimum length of {#limit}`,
    "string.max": `Username should have a maximum length of {#limit}`,
    "any.required": `Username is a required field`,
  }),
  email: Joi.string().required().email().messages({
    "string.base": `Email should be a type of string`,
    "string.empty": `Email cannot be an empty field`,
    "string.email": `Email format is invalid`,
    "any.required": `Email is a required field`,
  }),
  password: Joi.string().required().pattern(regex.passwordRegex).messages({
    "string.base": `Username should be a type of string`,
    "string.empty": `Username cannot be an empty field`,
    "string.pattern.base": `Password must be minimum eight characters, at least one letter and one number`,
    "any.required": `Password is a requred field`,
  }),
})
  .unknown(false)
  .messages({
    "object.unknown": "Additional fields are not allowed",
  });

module.exports = signupScheme;
