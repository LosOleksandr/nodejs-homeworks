require("dotenv").config();
const jwt = require("jsonwebtoken");

const httpError = require("../utils/httpError");
const { User } = require("../models");
const { TOKEN_KEY } = process.env;

const checkAuthToken = async (req, res, next) => {
  const { authorization = "" } = req.headers;

  const [header, token] = authorization.split(" ");

  if (header !== "Bearer") {
    throw httpError(401, "Not authorized");
  }

  try {
    const { id } = jwt.verify(token, TOKEN_KEY);
    const user = await User.findById(id);
    if (!user || !user.token || user.token !== token) {
      next(httpError(401, "Not authorized"));
    }
    req.user = user;
    next();
  } catch (error) {
    next(httpError(401, "Not authorized"));
  }
};

module.exports = checkAuthToken;
