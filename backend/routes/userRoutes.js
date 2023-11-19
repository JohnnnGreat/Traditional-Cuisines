const express = require("express");
const { Register, Login, GetUser } = require("../controllers/User");
const jsonToken = require("../middlewares/jsonToken");

const router = express.Router();
// Register Controlss
router.post("/register", Register);

//Login Controls
router.post("/login", Login);

//Users

router.get("/getuser/:id", jsonToken, GetUser);

module.exports = router;
