const express = require("express");

const router = express.Router();

const { validateBody, checkAuthToken } = require("../../middlewares");
const { userSchemes } = require("../../schemes");

const authController = require("../../controllers/authController");

router.post(
  "/register",
  validateBody(userSchemes.signupScheme),
  authController.signup
);

router.post(
  "/login",
  validateBody(userSchemes.loginScheme),
  authController.login
);

router.post("/logout", checkAuthToken, authController.logout);

router.get("/current", checkAuthToken, authController.getCurrent);

router.patch(
  "/",
  checkAuthToken,
  validateBody(userSchemes.userSubscrSheme),
  authController.updateSubscr
);

module.exports = router;
