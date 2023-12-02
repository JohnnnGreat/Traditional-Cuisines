const User = require("../models/user");
const brcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET,
});

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
    const userAdded = await User.create({
      fullName,
      email,
      password: hashedPassword,
    });
    const token = await jwt.sign(
      { userId: userAdded._id },
      process.env.JWTTOkEN
    );
    return res.status(201).json({
      success: true,
      message: "User added Suucessfully",
      data: userAdded,
      token,
    });
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

const GetAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    console.log(users);
  } catch (error) {}
};

const UploadProfilePic = async (req, res) => {
  const { id } = req.params;

  try {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    let dataURI = "data:" + req.file.mimetype + ";base64," + b64;

    const result = await cloudinary.uploader.upload(dataURI, {
      resource_type: "auto",
    });

    const { secure_url } = result;

    const image = await User.findByIdAndUpdate(id, { profilePic: secure_url });
    console.log(image);
  } catch (error) {}
};
module.exports = {
  Login,
  Register,
  GetUser,
  UploadProfilePic,
};
