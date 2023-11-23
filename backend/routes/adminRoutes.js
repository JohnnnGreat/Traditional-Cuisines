const express = require("express");

const router = express();

router.post("/register", RegisterAdmin);
router.post("/login", LoginAdmin);
