const express = require("express");
const {
  AddCuisine,
  GetCuisine,
  GetCuisines,
  GetUnapprovedCuisines,
  VerifyCuisine,
  GetAllProfileCuisines,
  GetApprovedCuisines,
  UpdateCuisine,
  GetCuisinesNo,
  DeleteCuisines,
  GetAddedCuisines,
} = require("../controllers/Cuisines");
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
router.get("/getcuisine/:id", GetCuisine);
router.get("/getunapprovedcuisines", GetUnapprovedCuisines);
router.put("/verifycuisine/:id", VerifyCuisine);
router.get("/getallprofilecuisines/:id", GetAllProfileCuisines);
router.get("/approvedcuisines", GetApprovedCuisines);
router.put("/update/:id", UpdateCuisine);
router.get("/getcuisinesno/:id", GetCuisinesNo);
router.delete("/delete/:id", DeleteCuisines);
router.get("/getaddedcuisines/:id", GetAddedCuisines);

module.exports = router;
