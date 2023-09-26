const { httpError } = require("../../utils");
const { User } = require("../../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { TOKEN_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) throw httpError(401, "Wrong email or password");

  const passwordCompare = await bcrypt.compare(password, user.password);

  if (!passwordCompare) {
    throw httpError(401, "Wrong email or password");
  }

  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, TOKEN_KEY, { expiresIn: "23h" });

  await User.findByIdAndUpdate(user._id, { token });

  res.json({
    token,
    user: {
      username: user.username,
      email: user.email,
      subscription: user.subscription,
    },
  });
};

module.exports = login;
