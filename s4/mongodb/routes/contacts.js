const express = require("express");
const router = express.Router();
const  Contact = require("../models/contact.js");

router.get("/", function (req, res, next) {
res.json({message:'hello world'})
});


 router.post('/', function(req, res, next) {new Contact({  
            FullName : req.body.FullName, 
            Phone : req.body.Phone 
          }) 
          .save( 
            (err,newcontact)=>{               if (err) 
                  console.log("error message :  "+err);               else{                 console.log(newcontact); 
 	 	 	res.json(" : Contact :" + newcontact._id +"   added"); 
              } 
            } 
          ); 

});

  

module.exports = router;