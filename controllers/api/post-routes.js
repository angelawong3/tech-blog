const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

// "/api/post" endpoint

// POST request to add a new post
router.post("/", withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      userId: req.session.userId,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// PUT request to edit an existing post
router.put("/:id", async (req, res) => {
  try {
    const [editedPost] = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (editedPost > 0) {
      res.status(200).json(editedPost);
    } else {
      res.status(404).json({ message: "Cannot edit post, please try again!" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE request to del an exisiting post
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        userId: req.session.userId,
      },
    });

    if (!postData) {
      res.status(404).json({ message: "No post found with this id!" });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
