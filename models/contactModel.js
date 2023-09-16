const { Schema, model } = require("mongoose");
const { mongooseError } = require("../utils");
const { regex } = require("../utils");

const contactScheme = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
      required: [true, "Set email for contact"],
      match: [regex.emailRegex, "Invalid email format"],
    },
    phone: {
      type: String,
      required: [true, "Set phone number for contact"],
      match: [regex.phoneRegex, "Invalid phone number format"],
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

contactScheme.post("save", mongooseError);

const Contact = model("contact", contactScheme);

module.exports = Contact;
