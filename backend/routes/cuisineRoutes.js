const express = require("express");
const { AddCuisine, GetCuisines } = require("../controllers/Cuisines");
const multer = require("multer");
const path = require("path");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     console.log(file);
//     cb(null, "uploads/"); // Folder where images will be stored
//   },
//   filename: function (req, file, cb) {
//     cb(
//       null,
//       file.fieldname + "-" + Date.now() + path.extname(file.originalname)
//     );
//   },
// });

const storage = multer.memoryStorage(); // Use memory storage for Cloudinary

const upload = multer({ storage: storage });

const router = express.Router();

// router.get("/getcuisines/:name", GetCuisine);
router.post("/addcuisines", upload.single("image"), AddCuisine);
router.get("/getcuisines/:id", GetCuisines);

module.exports = router;
