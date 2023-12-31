const express = require("express");
const {
  Register,
  Login,
  GetUser,
  UploadProfilePic,
  GenerateCode,
  VerifyUser,
  sendContactMessage,
  GetAllUsers,
} = require("../controllers/User");
const jsonToken = require("../middlewares/jsonToken");
const multer = require("multer");
const storage = multer.memoryStorage(); // Use memory storage for Cloudinary

const upload = multer({ storage: storage });

const router = express.Router();
// Register Controlss
router.post("/register", Register);

//Login Controls
router.post("/login", Login);

//Users

router.get("/getuser/:id", jsonToken, GetUser);
router.put("/updateprofile/:id", upload.single("image"), UploadProfilePic);

router.post("/generateCode", GenerateCode);
router.post("/verifyUser", VerifyUser);

router.post("/sendmessage", sendContactMessage);

router.get("/getusers", GetAllUsers);
module.exports = router;
