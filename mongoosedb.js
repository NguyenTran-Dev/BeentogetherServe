const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoose_connect = (callback) => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then((result) => {
      console.log("Connected mongooseDb!");
      callback(callback);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = mongoose_connect;
