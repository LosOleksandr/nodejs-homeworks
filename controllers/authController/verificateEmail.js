const { httpError } = require("../../utils");
const { User } = require("../../models");

const verificateEmail = async (req, res) => {
  const { verificationCode } = req.params;

  const user = await User.findOne({ verificationCode });

  if (!user) {
    throw httpError(404, "User not found");
  }

  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verificationCode: null,
  });

  res.status(200).json({
    message: "Your email was succesfully verificated",
  });
};

module.exports = verificateEmail;
