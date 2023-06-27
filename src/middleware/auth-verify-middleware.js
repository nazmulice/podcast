const jwt = require("jsonwebtoken");
const User = require("../models/user-model");
const { JWT_SECRET } = require("../../secret");

exports.requireSignIn = (req, res, next) => {
  try {
    let decoded = jwt.verify(req.headers.authorization, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized", error: error.message });
  }
};

exports.isAdmin = async (req, res, next) => {
  try {
    let user = await User.findById(req.user._id);
    if (user.role !== 1) {
      res.status(401).json({ message: "Unauthorized" });
    } else {
      next();
    }
  } catch (error) {
    res.status(401).json({ message: "Unauthorized", error: error.message });
  }
};
