const { httpError, sendEmail } = require("../../utils");
const { User } = require("../../models");

const resendEmail = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    throw httpError(404, "User not found");
  }

  if (user.verify) {
    throw httpError(400, "Email is already verified");
  }

  const code = user.verificationCode;

  const emailConfig = {
    to: email,
    subject: "Verify Email",
    html: `<a href="${process.env.BASE_URL}/api/users/verify/${code}">Click here to verify your email<a/>`,
  };

  await sendEmail(emailConfig);

  res.json({
    email: user.email,
    message: "Verification email sent",
  });
};

module.exports = resendEmail;
