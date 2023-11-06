const express = require("express");
const { Register, Login, GetUser } = require("../controllers/User");

const router = express.Router();
// Register Controlss
router.post("/register", Register);

//Login Controls
router.post("/login", Login);

//Users

router.get("/getuser/:id", GetUser);

module.exports = router;
