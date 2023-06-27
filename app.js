// Basic imports
const { readdirSync } = require("fs");
const express = require("express");
const app = express();

// Security Middleware
const cors = require("cors");

// Database Import
const mongoose = require("mongoose");
const { yellow } = require("colors");
const { MONGODB_URL } = require("./secret");
const { connectToDatabase } = require("./src/config/db-config");

// Security Middleware Implementation
app.use(cors());

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Database Connection
async function connectAppToDatabase() {
  try {
    await connectToDatabase();
  } catch (error) {
    // Handle the error
    console.error("Error connecting to the database:", error);
  }
}

connectAppToDatabase();

// Routes Implementation
readdirSync("./src/routes").map((r) =>
  app.use("/api/v1", require(`./src/routes/${r}`))
);


app.use('/', (req, res) => {
  res.send("Hello user");
})
// Undefined Route
app.use("*", (req, res) => {
  res.status(404).json({
    status: "fail",
    message: "404 not found!",
  });
});

module.exports = app;
