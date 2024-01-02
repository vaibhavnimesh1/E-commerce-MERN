const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");

const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());

//Routes import
const product = require("./Routes/products.routes.js");
app.use("/api/v1", product);
// app.use(bodyParser.urlencoded({ extended: true }));

const user = require("./Routes/user.routes.js");
app.use("/api/v1", user);

app.use(errorMiddleware);
module.exports = app;
