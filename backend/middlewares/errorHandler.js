const error = (err, req, res, next) => {
  console.log(err);
  res.status(200).json({ message: "Hello" });
};

module.exports = {
  error,
};
