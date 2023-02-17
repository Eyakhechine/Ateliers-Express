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
// find contact by id
  router.get("/find/:id", function (req, res, next) {
    Contact.findById(req.params.id, (err, contacts) => {
      res.json(contacts);
    });
  });
// delete contact
router.get("/delete/:id", function (req, res, next) {
  Contact.findByIdAndDelete(req.params.id, (err, contacts) => {
    console.log(contacts);
 
    res.redirect("/contacts");
  });
});
module.exports = router;