const errorHandler = require("../utils/errorHandler.js");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || "500";
  err.message = err.message || "Internal Server Error";

  //wrong mongodb id err
  if (err.name == "CastError") {
    const message = ` Resource not found. Invalid : ${err.path}  `;
    err = new errorHandler(400, message);
  }

  return res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
