const app = require("./app.js");
const dotenv = require("dotenv");
const DB = require("./database.js");

//handled exception error
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(" Shutting down the server due to unhandled  exception error ");
});

//config
dotenv.config({ path: "backend/config/.env" });

// connection to database
DB();

// server
const server = app.listen(process.env.PORT, (req, res) => {
  try {
    console.log("server is running at " + process.env.PORT);
  } catch (error) {
    console.log("server is creating problem ");
  }
});

// handle Promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(" Shutting down the server due to unhandled  Promise ");

  server.close(() => {
    process.exit(1);
  });
});
