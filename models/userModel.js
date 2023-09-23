const { Schema, model } = require("mongoose");
const { mongooseError } = require("../utils");

const subscriptions = ["free", "pro", "business"];

const userScheme = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    subscription: {
      type: String,
      enum: subscriptions,
      default: "free",
    },
    avatarUrl: String,
    token: String,
  },
  { versionKey: false, timestamps: true }
);

userScheme.post("save", mongooseError);

const User = model("user", userScheme);

module.exports = User;
