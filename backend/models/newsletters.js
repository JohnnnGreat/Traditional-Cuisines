const mongoose = require("mongoose");

const NewsletterSchema = mongoose.Schema({
  email: {
    required: true,
    type: String,
  },
});

const Newsletter = mongoose.model("Newsletter", NewsletterSchema);
module.exports = Newsletter;
