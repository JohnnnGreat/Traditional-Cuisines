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

// const GetAllUsers = async (req, res) => {
//   try {
//     const users = await User.find();
//     console.log(users);
//   } catch (error) {}
// };

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
        html: `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Email Verification</title>
          <style>
            body {
              font-family: 'Arial', sans-serif;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
            }
        
            .container {
              max-width: 600px;
              margin: 20px auto;
              background-color: #fff;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
        
            h2 {
              color: #333;
            }
        
            p {
              color: #666;
            }
        
            .verification-link {
              display: inline-block;
              padding: 10px 20px;
              background-color: #007bff;
              color: #fff;
              text-decoration: none;
              border-radius: 5px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>Email Verification</h2>
            <p>Dear User,</p>
            <p>Please click the link below to verify your email address:</p>
            <a href="https://soulfood-sepia.vercel.app/profile?code=${stringRepresentation}" class="verification-link">Verify Email</a>
            <p>If you didn't request this verification, please ignore this email.</p>
            <p>Thank you,</p>
            <p>Your Company Name</p>
          </div>
        </body>
        </html>`,
        // html: `Click the link to verify https://soulfood-sepia.vercel.app/profile?code=${stringRepresentation}`,
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

async function sendContactMessage(req, res) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "johnossai20@gmail.com",
        pass: "kblgyogjwalbiwja",
      },
    });
    const mailData = {
      from: `New contact message <${req.body.email}>`,
      to: "JOHN <johnossai20@gmail.com>",
      subject: `Message From ${req.body.name}`,

      html: ` <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Contact Form Submission</title>
          <style>
              body {
                  font-family: 'Arial', sans-serif;
                  background-color: #f4f4f4;
                  margin: 0;
                  padding: 0;
              }
      
              .container {
                  max-width: 600px;
                  margin: 50px auto;
                  background-color: #fff;
                  padding: 20px;
                  border-radius: 8px;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              }
      
              h2 {
                  color: #000;
                  border-bottom: 2px solid #3498db;
                  padding-bottom: 10px;
                  font-size:2rem;
              }
      
              p {
                  color: #666;
                  line-height: 1;
                  font-size:1rem;
              }
      
              .user-info {
                  margin-bottom: 20px;
              }
      
              .info-label {
                  font-weight: bold;
                  color: #333;
                  font-size:1.5rem;
              }
      
              .info-value {
                  color: #3498db;
                  font-size:1.21rem;
              }
      
              .message {
                  margin-top: 20px;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <h2>Contact Form Submission</h2>
              <p>Below are the details of a new contact form submission:</p>
      
              <div class="user-info">
              
      
                  <p class="info-label">Email:</p>
                  <p class="info-value">${req.body.email}</p>
              </div>
      
              <p class="info-label">Message:</p>
              <p class="message">${req.body.messagev}</p>
          </div>
      </body>
      </html>`,
    };

    await transporter.sendMail(mailData);

    res
      .status(200)
      .json({ message: "Message sent succesfully", success: true });
    console.log(rew.body);
  } catch (error) {
    
  }
}

async function GetAllUsers(req, res, next) {
  try {
    const data = await User.find();
    res.status(200).json({ data });
  } catch (error) {
    next(error.message);
  }
}

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
  sendContactMessage,
  GetAllUsers,
};
