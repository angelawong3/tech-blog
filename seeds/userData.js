const { User } = require("../models");

const userdata = [
  {
    username: "kk",
    password: "password1",
  },
  {
    username: "angela",
    password: "password2",
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
