const express = require("express");
const router = express.Router();
const blogController = require("../controller/blogController");

router.get("/", blogController.homePage);
router.get("/add-post", blogController.addingPost)
router.post("/add-post", blogController.addedPost)
router.delete("/delete-post/:id", blogController.deletedPost)

module.exports = router;