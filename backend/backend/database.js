const mongoose = require("mongoose");

const DB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // useCreateIndex: true,
    })
    .then((data) => {
      console.log(`mongo db connect with ${data.connection.host}`);
    });
};

module.exports = DB;
