const isValidId = require("./isValidId");
const validateBody = require("./validateBody");
const checkAuthToken = require("./auth");
const upload = require("./upload");

module.exports = {
  isValidId,
  validateBody,
  checkAuthToken,
  upload,
};
