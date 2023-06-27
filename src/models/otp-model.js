const mongoose = require("mongoose");

const otpSchema = mongoose.Schema(
  {
    email: { type: String },
    otp: { type: String },
    status: { type: Number, default: 0 },
  },
  { timestamps: true, versionKey: false }
);

const OTPModel = mongoose.model("otp", otpSchema);
module.exports = OTPModel;
