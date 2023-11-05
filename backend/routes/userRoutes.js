const express = require("express");
const { Register, Login } = require("../controllers/User");

const router = express.Router();
// Register Controlss
router.post("/register", Register);

//Login Controls
router.post("/login", Login);

module.exports = router;
