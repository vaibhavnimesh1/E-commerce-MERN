const express = require("express");
const app = express();
app.use(express.json());
//Routes import
const product = require("./Routes/products.routes.js");
app.use("/api/v1", product);

module.exports = app;
