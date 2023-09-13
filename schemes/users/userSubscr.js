const Joi = require("joi");

const subscriptions = ["free", "pro", "business"];

const userSubscrSheme = Joi.object({
  subscription: Joi.string()
    .required()
    .valid(...subscriptions)
    .messages({
      "string.base": `Subscription should be a type of string`,
      "string.empty": `Subscription cannot be an empty field`,
      "any.required": `Subscription is a required field`,
    }),
});

module.exports = userSubscrSheme;
