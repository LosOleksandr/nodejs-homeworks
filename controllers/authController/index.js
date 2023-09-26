const { controlWrapper } = require("../../utils");

const signup = require("./signup");
const login = require("./login");
const logout = require("./logout");
const getCurrent = require("./getCurrent");
const updateSubscr = require("./updateSubscr");
const updateAvatar = require("./updateAvatar");
const verificateEmail = require("./verificateEmail");
const resendEmail = require("./resendEmail");

module.exports = {
  signup: controlWrapper(signup),
  login: controlWrapper(login),
  logout: controlWrapper(logout),
  getCurrent: controlWrapper(getCurrent),
  updateSubscr: controlWrapper(updateSubscr),
  updateAvatar: controlWrapper(updateAvatar),
  verificateEmail: controlWrapper(verificateEmail),
  resendEmail: controlWrapper(resendEmail),
};
