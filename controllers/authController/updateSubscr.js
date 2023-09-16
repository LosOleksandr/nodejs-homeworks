const { httpError } = require("../../utils");
const { User } = require("../../models");

const updateSubscr = async (req, res) => {
  const { _id } = req.user;

  const user = await User.findByIdAndUpdate(_id, req.body, { new: true });

  if (!user) {
    throw httpError(404, "Not Found");
  }

  res.json({ subscription: user.subscription });
};

module.exports = updateSubscr;
