const router = require("express").Router();
const AddEmail = require("../controllers/Newsletter");

router.post("/", AddEmail);

module.exports = router;
