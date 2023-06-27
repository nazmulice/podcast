// Entry point for the application

// Apply the library to all files
require("dotenv").config();
require("colors");

const app = require("./app");
const { PORT } = require("./secret");
const port = PORT;

app.listen(port, () => console.log(`stream-pods server is running.`));
