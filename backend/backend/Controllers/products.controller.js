const Product = require("../models/product.model");
const asynchandler = require("../middleware/asynchandler");
const ErrorHander = require("../utils/errorHandler");
const Apifeatures = require("../utils/apiFeatures");

//Get products

exports.getAllProducts = asynchandler(async (req, res) => {
  let resultPerPage = 5;
  const productCount = await Product.countDocuments();
  const apifeature = new Apifeatures(Product.find({}), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  const allProducts = await apifeature.query;
  res.status(200).json({
    succes: true,
    allProducts,
    productCount,
  });
});

//Create product

exports.createProduct = asynchandler(async (req, res, next) => {
  req.body.user = req.user.id;
  const product = await Product.create(req.body);
  res.status(201).json({
    succes: true,
    product,
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

// sinle product details

exports.getproductDetail = asynchandler(async (req, res, next) => {
  let product = await Product.find(req.params.id);

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
