const app = require("./app.js");
const dotenv = require("dotenv");
const DB = require("./database.js");

//config
dotenv.config({ path: "backend/config/.env" });

// connection to database
DB();

app.listen(process.env.PORT, (req, res) => {
  try {
    console.log("server is running at " + process.env.PORT);
  } catch (error) {
    console.log("server is creating problem ");
  }
});
