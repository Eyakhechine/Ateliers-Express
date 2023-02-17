var os = require("os");
var express = require("express");
var router = express.Router();
const products =require("./products.json");



router.get('/', function(req, res, next){
    res.json({products});
});


router.get('/:id', function(req, res, next){
    const id= req.params.id;
    const product= products[id];
   
        res.send(product);


    router.get("/:id/:qt", function (req, res, next) {
      const id = req.params.id;
   
        const qt = req.params.qt;
        const unit_price = products[id].price;
        const total_price = unit_price * qt;
        res.json({
          id: id,
          qt: qt,
          unit_price: unit_price,
          total_price: total_price,
        });
     
    });


    router.get("/search/instock/:qt", function (req, res, next) {
      const qt = req.params.qt;
      All = Object.values(products);
      const inStock = All.filter((elem) => {

        return elem.stock <= qt;
      });
      if (inStock.length <= 0) {
        res.send("not in stock ! ");
      } else {
        res.send(inStock);
      }
    });

  
});

module.exports = router;
