const express = require("express");
// const { router } = require("../app.js");
const { getAllProducts } = require("../Controllers/products.controller.js");

const router = express.Router();

router.route("/product").get(getAllProducts);

module.exports = router
