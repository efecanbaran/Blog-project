const express = require("express");
const app = express();
const PostSchema = require("../model/postSchema");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const homePage = async (req, res) => {
  const posts = await PostSchema.find();
  await res.render("index", { posts });
};

const addingPost = (req, res) => {
  res.render("addPost");
};

const addedPost = async (req, res) => {
  try {
    const newPost = await new PostSchema(req.body);
    await newPost.save();
    await res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

const deletedPost = async (req, res) => {
  try {
    const post = await PostSchema.findByIdAndDelete(req.params.id);
    res.json({link: "/"});
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  homePage,
  addingPost,
  addedPost,
  deletedPost,
};
