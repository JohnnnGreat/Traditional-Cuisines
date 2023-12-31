const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    profilePic: {
      type: String,
      required: false,
      default:
        "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png",
    },
    vCode: { type: String, required: false },
    verified: { type: Boolean, default: false },
  },
  { timestamp: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
