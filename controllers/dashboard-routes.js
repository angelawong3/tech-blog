const router = require("express").Router();
const { Comment, Post, User } = require("../models");
// Import the custom middleware
const withAuth = require("../utils/auth");

// get all posts
router.get("/", withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      where: { userId: req.session.userId },
      include: [User],
    });
    const posts = dbPostData.map((post) => post.get({ plain: true }));

    res.render("all-post", {
      layout: "dashboard",
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.redirect("login");
  }
});

module.exports = router;
