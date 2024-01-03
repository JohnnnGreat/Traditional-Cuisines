const User = require("../models/user");
const brcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cloudinary = require("cloudinary").v2;
const crypto = require("crypto");
const nodemailer = require("nodemailer");

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

const UploadProfilePic = async (req, res, next) => {
  const { id } = req.params;

  try {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    let dataURI = "data:" + req.file.mimetype + ";base64," + b64;

    const result = await cloudinary.uploader.upload(dataURI, {
      resource_type: "auto",
    });

    const { secure_url } = result;

    await User.findByIdAndUpdate(id, { profilePic: secure_url });
    res.status(200).json({
      success: true,
      message: "Profile picture updated successfully, Please reload!",
    });
  } catch (error) {
    next(error.message);
  }
};

const GenerateCode = async (req, res) => {
  try {
    const { email, _id } = req.body;

    const user = await User.findOne({ email });
    if (!user) throw new Error("User not found");

    const { verified } = user;
    if (verified) {
      throw new Error("User Already Verified");
    } else {
      const value = [];

      for (let i = 1; i <= 6; i++) {
        value.push(GenerateRandomValues());
      }

      const stringRepresentation = value.join(",").replace(/,/g, "");

      const updateUser = await User.findByIdAndUpdate(
        _id,
        {
          vCode: stringRepresentation,
        },
        {
          new: true,
        }
      );
      // updateUser.save();

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "johnossai20@gmail.com",
          pass: "kblgyogjwalbiwja",
        },
      });

      const mailData = {
        from: "VERIFY EMAIL ADDRESS <johnossai20@gmail.com>",
        to: `<${email}>`,
        subject: `Verify Email Address`,
        html: `Click the link to verify http://localhost:3000/profile?code=${stringRepresentation}`,
      };

      await transporter.sendMail(mailData);

      res.status(200).json({ message: "A link have been sent", success: true });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};
const VerifyUser = async (req, res) => {
  try {
    const { email, code } = req.body;

    const user = await User.findOne({ email });
    const { _id, vCode } = user;

    if (vCode === code) {
      const updateUser = await User.findByIdAndUpdate(
        _id,
        { verified: true },
        { new: true }
      );
    }

    res.status(200).json({ message: "User verified succesfully" });
  } catch (error) {
    console.log(error);
  }
};

function GenerateRandomValues() {
  const randomBytes = crypto.randomBytes(1); // Use 1 byte for a number between 0 and 255
  const randomNumber = randomBytes.readUInt8(0);

  const scaledRandomNumber = 1 + (randomNumber % 6);
  return scaledRandomNumber;
}

module.exports = {
  Login,
  Register,
  GetUser,
  UploadProfilePic,
  GenerateCode,
  VerifyUser,
};
