const express = require("express");
const router = express.Router();
// Require controller modules.
var postsController = require("../controllers/postsController");

//GET all posts
router.get("/", postsController.getPosts);

//GET a posts
router.get("/:id", postsController.getPost);

// Adding new Post
router.post("/", postsController.addPost);

// update a Post
router.put("/:id", postsController.updatePost);

// delete a Post
router.delete("/:id", postsController.deletePost);

module.exports = router;
