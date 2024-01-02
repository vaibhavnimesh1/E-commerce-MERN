const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  forgotPassword,
  resetPassword,
  getUserDetails,
  updatePassword,
  updateProfile,
  getAllUser,
  updateUserRole,
  getSingleUser,
  deleteUser,
} = require("../Controllers/users.controllers");
const { isAuthenticated, authorisedRole } = require("../middleware/auth.middleware");

const router = express();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/password/forgot").post(forgotPassword);

router.route("/password/reset/:token").put(resetPassword);

router.route("/logout").get(logoutUser);

router.route("/me").get(isAuthenticated,getUserDetails)

router.route("/password/update").put(isAuthenticated,updatePassword)

router.route("/me/update").put(isAuthenticated, updateProfile);

router
  .route("/admin/users")
  .get(isAuthenticated, authorisedRole("admin"), getAllUser);

router
  .route("/admin/user/:id")
  .get(isAuthenticated, authorisedRole("admin"), getSingleUser)
  .put(isAuthenticated, authorisedRole("admin"), updateUserRole)
  .delete(isAuthenticated, authorisedRole("admin"), deleteUser);

module.exports = router;
