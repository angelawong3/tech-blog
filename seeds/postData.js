const { Post } = require("../models");

const postdata = [
  {
    postDate: "July 08, 2022 21:10:00",
    postTitle: "Object-Relational Mapping",
    postContent:
      "The ORM equips you with object-oriented tools to run commands that you would usually run on databases.",
    userId: 1,
  },
  {
    postDate: "July 08, 2022 21:20:00",
    postTitle: "Model-View-Controller",
    postContent:
      "Developing user interfaces that divide the related program logic into three interconnected elements.",
    userId: 1,
  },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;
