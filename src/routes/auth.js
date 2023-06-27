const express = require("express");
const authController = require("../controllers/auth-controller");
const authVerifyMiddleware = require("../middleware/auth-verify-middleware");

const router = express.Router();


// Before login
router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/send-otp/:email", authController.sendOtp);
router.get("/verify-otp/:email/:otp", authController.verifyOtp);


// After login
router.put(
  "/update-profile",
  authVerifyMiddleware.requireSignIn,
  authController.updateProfile
);

module.exports = router;
