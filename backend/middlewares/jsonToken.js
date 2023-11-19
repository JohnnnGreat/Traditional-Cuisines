const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
    const tokenizeString = req.headers.authorization.split(" ");
    if (!tokenizeString[0] === "Bearer") {
      throw new Error("Token not found");
    }
    const token = tokenizeString[1];
    const { userId } = jwt.verify(token, process.env.JWTTOKEN);
    if (!userId) {
      throw new Error("Invalid token");
    }

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = verifyToken;
