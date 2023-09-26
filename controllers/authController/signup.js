const { httpError, sendEmail } = require("../../utils");
const { User } = require("../../models");
const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const { nanoid } = require("nanoid");
require("dotenv").config();

const signup = async (req, res) => {
  const { email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const avatarUrl = gravatar.url(email);

  const verificationCode = nanoid();

  const user = await User.findOne({ email });

  if (user) {
    throw httpError(409, "Email is already in use");
  }

  const newUser = await User.create({
    ...req.body,
    password: hashedPassword,
    avatarUrl,
    verificationCode,
  });

  const emailConfig = {
    to: email,
    subject: "Verify Email",
    html: `<a href="${process.env.BASE_URL}/api/users/verify/${verificationCode}">Click here to verify your email<a/>`,
  };

  await sendEmail(emailConfig);

  res.status(201).json(newUser);
};

module.exports = signup;
