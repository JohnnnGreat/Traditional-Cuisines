const router = require("express").Router();
const { GetCuisine } = require("../controllers/Cuisines");

router.get("/getcuisines/:name", GetCuisine);
