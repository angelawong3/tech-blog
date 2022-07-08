const router = require("express").Router();
const { Comment, Post, User } = require("../models");
// Import the custom middleware
const withAuth = require("../utils/auth");

module.exports = router;

// get all posts
router.get("/", async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      include: [User],
    });
    // const posts = dbPostData.map((post) => post.get({ plain: true }));

    // res.render("homepage", {
    //   posts,
    //   loggedIn: req.session.loggedIn,
    // });
    res.status(200).json(dbPostData);
  } catch (err) {
    res.status(500).json(err);
  }
});
