const mongoose = require("mongoose");
const { MONGODB_URL } = require("../../secret");

// MongoDB Database Connection
exports.connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: true,
    });

    console.log("Connected to MongoDB Database with server".green);
  } catch (error) {
    console.error("Connection error:".bgRed, error);
  }
};

const db = mongoose.connection;

db.on("disconnected", () => {
  console.log("Disconnected from MongoDB server", yellow);
});
