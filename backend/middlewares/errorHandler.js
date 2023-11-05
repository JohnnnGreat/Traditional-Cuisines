const error = (err, req, res, next) => {
  const statusCode = err.statusCode || 404;
  res.status(statusCode).json({ message: err.message });
};

module.exports = {
  error,
};
