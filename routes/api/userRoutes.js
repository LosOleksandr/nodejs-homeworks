const express = require("express");

const router = express.Router();

const { validateBody, checkAuthToken, upload } = require("../../middlewares");
const { userSchemes } = require("../../schemes");

const authController = require("../../controllers/authController");

router.post(
  "/register",
  upload.single("avatar"),
  validateBody(userSchemes.signupScheme),
  authController.signup
);

router.get("/verify/:verificationCode", authController.verificateEmail);

router.post(
  "/verify",
  validateBody(userSchemes.resendEmailSheme),
  authController.resendEmail
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

router.patch(
  "/avatar",
  checkAuthToken,
  upload.single("avatar"),
  authController.updateAvatar
);

module.exports = router;
