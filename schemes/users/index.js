const signupScheme = require("./signupScheme");
const loginScheme = require("./loginScheme");
const userSubscrSheme = require("./userSubscr");
const resendEmailSheme = require("./resendEmailScheme");

const userSchemes = {
  signupScheme,
  loginScheme,
  userSubscrSheme,
  resendEmailSheme,
};

module.exports = userSchemes;
