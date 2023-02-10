var os = require("os");
var express = require("express");
var router = express.Router();
const products =require("./products.json");



router.get("/", (req, res, next) => {
  res.json({

  });
});

router.get("/products", (req, res) => {
  res.json({
    products: json(products),
  });
});

router.get("/cpus", (req, res, next) => {
  res.json({
    products: json(products),
  });
});
module.exports = router;
