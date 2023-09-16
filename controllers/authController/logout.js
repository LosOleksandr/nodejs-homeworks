const { User } = require("../../models");
const { httpError } = require("../../utils");

const logout = async (req, res) => {
  const { _id } = req.user;

  const user = await User.findByIdAndUpdate(_id, { token: "" });

  if (!user) {
    throw httpError(404, "Not found");
  }

  res.status(204).json();
};

module.exports = logout;
