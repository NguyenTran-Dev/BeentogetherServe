const mongoose = require("mongoose");

const post_schema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    img_url: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PostModel", post_schema);
