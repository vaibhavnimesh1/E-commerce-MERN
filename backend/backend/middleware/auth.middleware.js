const jwt = require("jsonwebtoken");
const ErrorHander = require("../utils/errorHandler");
const User = require("../models/user.model");
const asynchandler = require("./asynchandler");

exports.isAuthenticated = asynchandler(async (req, res, next) => {
  const { token } = req.cookies;
  //   console.log(token);

  if (!token) {return next(new ErrorHander(401, "Please login to access resources"));}
  const decodedData = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decodedData.id);
  next();
});

exports.authorisedRole = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHander(
          403,
          ` Role : ${req.user.role} is not allowed to access this resources`
        )
      );
    }
    next();
  };
};
