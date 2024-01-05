const RegisterAdmin = (req, res) => {};

const LoginAdmin = (req, res) => {
  const { text } = req.body;
  const ADMIN_KEY = "12hsu876254";
  if (text !== ADMIN_KEY) {
    return res
      .status(400)
      .json({ message: "Admin key not valid", success: false });
  }

  res.status(200).json({ message: "Admin Key Valid", success: true });
};
module.exports = {
  RegisterAdmin,
  LoginAdmin,
};
