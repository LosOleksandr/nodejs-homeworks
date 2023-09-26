const nodemailer = require("nodemailer");

require("dotenv").config();

const config = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "loss_dev@meta.ua",
    pass: process.env.PASSWORD,
  },
};

const transporter = nodemailer.createTransport(config);

const sendEmail = async (data) => {
  const emailOptions = {
    from: "loss_dev@meta.ua",
    ...data,
  };

  try {
    const res = await transporter.sendMail(emailOptions);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

module.exports = sendEmail;
