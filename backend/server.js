const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");
const { connectToDb } = require("./config");
const userRoutes = require("./routes/userRoutes");
const cuisinesRoutes = require("./routes/cuisineRoutes");
const { error } = require("./middlewares/errorHandler");
const multer = require("multer");
//Initialize Application
const app = express();

const PORT = process.env.PORT || 8080;

// Middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use("/users", userRoutes);
app.use("/cuisines", cuisinesRoutes);

app.use(error);

// app.get("/", (req, res, next) => {
//   error(req, res, next), res.send("Server Running");
// });

(async function () {
  await connectToDb();
  app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
})();
