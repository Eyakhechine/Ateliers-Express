var os = require("os");
var express = require("express");
var router=express.Router();

router.get('/',(req,res,next) =>{

res.json({
hostaname: os.hostname(),
type: os.type(),
platform: os.platform(),

})

})


router.get("/cpus", (req, res, next) => {
  res.json({
   cpus:os.cpus(),
  });
});

router.get("/cpus/:id", (req, res, next) => {
  res.json({
    cpus: os.cpus()[req.params.id],
  });
});


module.exports=router;
