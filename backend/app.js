const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");

app.use(express.json());
//Routes import
const product = require("./Routes/products.routes.js");
app.use("/api/v1", product);

app.use(errorMiddleware)
module.exports = app;
