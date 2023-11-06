const User = require("../models/user");
const brcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Login = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(req.body);

  try {
    const user = await User.findOne({ email });

    if (!user) throw new Error("User not found");

    const isPassword = await brcrypt.compare(password, user.password);
    if (isPassword) {
      const token = await jwt.sign({ userId: user._id }, process.env.JWTTOkEN);
      return res.status(200).json({
        data: user,
        success: true,
        message: "User Login Succesfully",
        token: token,
      });
    } else {
      throw new Error("Invalid Credentials");
    }
  } catch (error) {
    next(error);
  }
};

const Register = async (req, res, next) => {
  const { fullName, email, password } = req.body;

  try {
    // Check if the user exist
    const user = await User.findOne({ email });
    if (user) throw new Error("User already exist");

    const hashedPassword = await brcrypt.hash(password, 12);
    await User.create({ fullName, email, password: hashedPassword });

    return res
      .status(201)
      .json({ success: true, message: "User added Suucessfully" });
  } catch (error) {
    next(error);
  }
};

const GetUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user)
      throw new Error("An Unexpected error occured while fetching data");

    return res.status(200).json({ success: true, userData: user });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
module.exports = {
  Login,
  Register,
  GetUser,
};
