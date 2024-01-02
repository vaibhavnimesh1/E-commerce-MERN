const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deletedProduct,
  getproductDetail,
} = require("../Controllers/products.controller.js");
const {
  isAuthenticated,
  authorisedRole,
} = require("../middleware/auth.middleware.js");

const router = express.Router();

router.route("/product").get(isAuthenticated, getAllProducts);

router
  .route("/product/new")
  .post(isAuthenticated, authorisedRole("admin"), createProduct);

router
  .route("/product/:id")
  .put(isAuthenticated, authorisedRole("admin"), updateProduct)
  .delete(isAuthenticated, authorisedRole("admin"), deletedProduct)
  .get(getproductDetail);

// router.route("/product/:id")

module.exports = router;
