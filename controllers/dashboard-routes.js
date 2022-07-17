const router = require("express").Router();
const { Comment, Post, User } = require("../models");

// get all user's posts when logged in
router.get("/", async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      where: { userId: req.session.userId },
      include: [User],
    });
    const posts = dbPostData.map((post) => post.get({ plain: true }));

    res.render("dashboard-posts", {
      layout: "dashboard",
      posts,
    });
  } catch (err) {
    res.redirect("login");
  }
});

// to create new post
router.get("/new", (req, res) => {
  res.render("new-post", {
    layout: "dashboard",
  });
});

// to edit existing post
router.get("/edit/:id", async (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.params.id);

    if (dbPostData) {
      const post = dbPostData.get({ plain: true });
      res.render("edit-post", {
        layout: "dashboard",
        post,
      });
    } else {
      alert("Failed to edit post");
    }
  } catch (err) {
    res.redirect("login");
  }
});

module.exports = router;
