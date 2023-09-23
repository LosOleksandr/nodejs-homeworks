const { httpError } = require("../../utils");
const { User } = require("../../models");
const bcrypt = require("bcrypt");
const gravatar = require("gravatar");

const signup = async (req, res) => {
  const { email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const avatarUrl = gravatar.url(email);

  const user = await User.findOne({ email });

  if (user) {
    throw httpError(409, "Email is already in use");
  }

  const newUser = await User.create({
    ...req.body,
    password: hashedPassword,
    avatarUrl,
  });

  res.status(201).json(newUser);
};

module.exports = signup;
