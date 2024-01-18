const express = require("express");
const router = express.Router();
const User = require("../models/UserModel.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const verifyToken = require("../verifyToken.js");

//Register
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hashSync(password, salt);
    const newUser = new User({ username, email, password: hashedPassword });
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).send("user not exist!");
    }
    const match = await bcrypt.compareSync(req.body.password, user.password);
    if (!match) {
      return res.status(401).send("wrong password!");
    }
    const token = jwt.sign({ id: user._id }, process.env.SECRETKEY, {
      expiresIn: "1h",
    });
    const { password, ...resInfo } = user._doc;
    res.cookie("token", token).status(200).json(resInfo);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Logout
router.get("/logout", async (req, res) => {
  try {
    res
      .clearCookie("token")
      .status(200)
      .send("user logged out successfully!");
  } catch (error) {
    res.status(500).json(error);
  }
});

//Refetch User
router.get("/refetch", (req, res) => {
  try {
    const token = req.cookies.token;
    jwt.verify(token, process.env.SECRETKEY, async (err, data) => {
      if (err) {
        return res.status(404).json(err);
      }
      res.status(200).json(data);
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
