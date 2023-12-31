const Newsletter = require("../models/newsletters");
const AddEmail = async (req, res, next) => {
  const { email } = req.body;

  try {
    const newsletters = await Newsletter.findOne({ email });
    if (newsletters)
      throw new Error("This email already subscribed, try a new email address");
    await Newsletter.create({ email });
    res.status(200).json({
      success: true,
      message: "Thank you for subscribing, your email have been received",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = AddEmail;
