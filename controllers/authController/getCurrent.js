const { httpError } = require("../../utils");
const { User } = require("../../models");

const getCurrent = async (req, res) => {
  const { _id } = req.user;

  const user = await User.findById(_id);

  if (!user) {
    throw httpError(404, "Not found");
  }

  res.json({
    _id,
    username: user.username,
    email: user.email,
    subscription: user.subscription,
  });
};

module.exports = getCurrent;
