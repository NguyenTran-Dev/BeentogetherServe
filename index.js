require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const mongoose_connect = require("./mongoosedb");
const body_parse = require("body-parser");
const post = require("./Routers/post");
const UploadFile = require("./Routers/upload_file");
const PORT = process.env.PORT || 5000;
const config_cors = {
  origin: true,
  methods: ["GET,PUT,PATCH,POST,DELETE"],
  credentials: true,
  maxAge: 3600,
};

app.use(cors(config_cors));
app.use(body_parse.json({ limit: "30mb" }));
app.use(body_parse.urlencoded({ extended: false }));

//router
app.use("/api/posts", post);
app.use("/api/cloudinary-upload", UploadFile);
//end router
mongoose_connect(() => {
  app.listen(PORT);
  console.log(`Connected Port: ${PORT} is successfully!`);
});
