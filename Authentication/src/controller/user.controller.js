const express = require("express");
const User = require("../models/user.model");

const router = express.Router();

router.get("", async (req, res) => {
  try {
      const users = await User.find({}).lean().exec();
    return res.send(users);
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = router;
