const asynchandler = require("../middleware/asynchandler");
const Product = require("../models/product.model");
const ErrorHander = require("../utils/errorHandler");

//create product

exports.createProduct = asynchandler(async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({  
    succes: true,
    product,
  });
});

//Get product

exports.getAllProducts = asynchandler(async (req, res) => {
  const allProducts = await Product.find({});
  res.status(200).json({
    succes: true,
    allProducts,
  });
});

//Update pruduct
exports.updateProduct = asynchandler(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHander(500, "Product is not found"));
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(201).json({
    succes: true,
    product,
  });
});

// delete product

exports.deletedProduct = asynchandler(async (req, res, next) => {
  let product = await Product.findByIdAndDelete(req.params.id);

  if (!product) {
    return next(new ErrorHander(500, "Product is not found"));
  }

  // await product.remove()
  res.status(200).json({
    succes: true,
    message: "Product delete succesfully",
    product,
  });
});
