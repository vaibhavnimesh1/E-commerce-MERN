
const express = require("express");
const {
  newOrder,
  getSingleOrder,
  myOrders,
  getAllOrders,
  updateOrder,
  deleteOrder,
} = require("../Controllers/order.controllers");
const {
    isAuthenticated,
    authorisedRole,
  } = require("../middleware/auth.middleware.js");
const router = express.Router();

router.route("/order/new").post(isAuthenticated, newOrder);

router.route("/order/:id").get(isAuthenticated, getSingleOrder);

router.route("/orders/me").get(isAuthenticated, myOrders);

router
  .route("/admin/orders")
  .get(isAuthenticated, authorisedRole("admin"), getAllOrders);

router
  .route("/admin/order/:id")
  .put(isAuthenticated, authorisedRole("admin"), updateOrder)
  .delete(isAuthenticated, authorisedRole("admin"), deleteOrder);

module.exports = router;