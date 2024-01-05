const express = require("express");
const { LoginAdmin } = require("../controllers/Admin");

const router = express();

// router.post("/register", RegisterAdmin);
router.post("/login", LoginAdmin);

module.exports = router;
