const router = require("express").Router();
const { Comment, Post, User } = require("../models");
// Import the custom middleware
const withAuth = require("../utils/auth");

// get all posts
router.get("/", async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      include: [User],
    });
    const posts = dbPostData.map((post) => post.get({ plain: true }));

    res.render("all-post", { posts, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get one post by its id
router.get("/post/:id", withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.params.id, {
      include: [User, { model: Comment, include: [User] }],
    });

    const post = dbPostData.get({ plain: true });

    res.render("one-post", {
      ...post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// lognin route
router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }

  res.render("login");
});

// signup route
router.get("/signup", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }

  res.render("signup");
});

module.exports = router;
