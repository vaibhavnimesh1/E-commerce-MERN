const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deletedProduct,
} = require("../Controllers/products.controller.js");

const router = express.Router();

router.route("/product").get(getAllProducts);

router.route("/product/new").post(createProduct);

router.route("/product/:id").put(updateProduct);

router.route("/product/:id").delete(deletedProduct);

module.exports = router;
