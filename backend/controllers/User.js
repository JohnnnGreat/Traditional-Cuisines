const User = require("../models/user");
const brcrypt = require("bcrypt");

const Login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) throw new Error("User not found");

    const isPassword = await brcrypt.compare(password, user.password);
    if (isPassword) {
      return res.status(200).json({
        data: user,
        success: true,
      });
    } else {
      throw new Error("Invalid Credentials");
    }
  } catch (error) {}
};

const Register = (req, res) => {};

module.exports = {
  Login,
  Register,
};
