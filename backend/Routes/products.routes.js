const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deletedProduct,
  getproductDetail,
  createProductReview,
  deleteReview,
  getProductReviews,
  getAdminProducts,
  getProductDetails,
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

router
  .route("/admin/products")
  .get(isAuthenticated, authorisedRole("admin"), getAdminProducts);

router
  .route("/admin/product/new")
  .post(isAuthenticated, authorisedRole("admin"), createProduct);

router
  .route("/admin/product/:id")
  .put(isAuthenticated, authorisedRole("admin"), updateProduct)
  .delete(isAuthenticated, authorisedRole("admin"), deletedProduct);

router.route("/product/:id").get(getProductDetails);

router.route("/review").put(isAuthenticated, createProductReview);

router
  .route("/reviews")
  .get(getProductReviews)
  .delete(isAuthenticated, deleteReview);

module.exports = router;
