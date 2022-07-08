const router = require("express").Router();
const { Comment, Post, User } = require("../models");
// Import the custom middleware
const withAuth = require("../utils/auth");

module.exports = router;
