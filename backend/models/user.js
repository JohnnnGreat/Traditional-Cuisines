const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    verificationToken: { type: String, required: false },
    verified: { type: Boolean, default: false },
  },
  { timestamp: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
