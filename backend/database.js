const mongoose = require("mongoose");

const DB = () => {
  try {
    mongoose
      .connect(process.env.MONGO_URI, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
        // useCreateIndex: true,
      })
      .then((data) => {
        console.log(`mongo db connect with ${data.connection.host}`);
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log("mongodb connection FAILED");
  }
};

module.exports = DB;
