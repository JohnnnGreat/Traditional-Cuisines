const mongoose = require("mongoose");

const cuisinesSchema = mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
    },

    description: {
      required: true,
      type: String,
    },

    imageUrl: {
      required: true,
      type: String,
    },

    method: {
      type: String,
      required: true,
    },

    ingredients: {
      type: Array,
      required: true,
    },

    nutrition: {
      type: String,
      // required: true,
    },

    category: {
      type: String,
      required: true,
    },

    time: {
      type: String,
      required: true,
    },

    approved: {
      type: Boolean,
      default: false,
    },

    user: {
      type: String,
      required: true,
    },
  },
  {
    timestamp: true,
  }
);

const Cuisines = mongoose.model("Cuisines", cuisinesSchema);
module.exports = Cuisines;
