const router = require("express").Router();
const { Comment, User } = require("../../models");

// "/api/comment" endpoint

// GET request to get all comments
router.get("/", async (req, res) => {
  try {
    const commentData = await Comment.findAll({
      include: [User],
    });
    const comments = commentData.map((comment) => comment.get({ plain: true }));

    res.render("one-post", { comments, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST request to post new comment
router.post("/", async (req, res) => {
  const body = req.body;

  try {
    const newComment = await Comment.create({
      ...body,
      postId: req.body.postId,
      userId: req.body.userId,
    });
    res.json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
