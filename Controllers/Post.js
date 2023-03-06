const PostModel = require("../Models/PostModel");
exports.getPosts = (req, res, next) => {
  res.send("Hello World!");
};
exports.createPost = (req, res) => {
  const post = new PostModel(req.body);
  return post
    .save()
    .then((new_post) => {
      return res.status(201).json({
        success: true,
        message: "New post created successfully",
        post: new_post,
      });
    })
    .catch((error) => {
      res.status(500).json({
        success: false,
        message: "Server error. Please try again.",
        error: error.message,
      });
    });
};
exports.deletePost = (req, res) => {
  const _id = req.params.id;
  if (!!_id) {
    PostModel.findByIdAndDelete(_id)
      .then(() => {
        return res.status(200).json({
          success: true,
          message: "Deleted Post successfully",
        });
      })
      .catch((error) => {
        res.status(404).json({
          success: false,
          error: error.message,
        });
      });
  } else {
    res.status(422).json({
      success: false,
      message: "Invalid id!",
    });
  }
};
