const Joi = require("joi");

const favoriteScheme = Joi.object({
  favorite: Joi.bool().required().messages({
    "any.required": `Favorite field is required`,
  }),
});

module.exports = favoriteScheme;
