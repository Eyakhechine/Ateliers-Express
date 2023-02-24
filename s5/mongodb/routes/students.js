const express = require("express");
const router = express.Router();
const  student = require("../models/student.js");

router.get("/", function (req, res, next) {
res.json({message:'hello world'})
});


 router.post('/', function(req, res, next) {new student({  
            Nom : req.body.Nom, 
            Age : req.body.Age 
          }) 
          .save( 
            (err,newstudent)=>{               if (err) 
                  console.log("error message :  "+err);               else{                 console.log(newstudent); 
 	 	 	res.json(" : student :" + newstudent._id +"   added"); 
              } 
            } 
          ); 

});
// find student by id
  router.get("/find/:id", function (req, res, next) {
    student.findById(req.params.id, (err, students) => {
      res.json(students);
    });
  });
// delete student
router.get("/delete/:id", function (req, res, next) {
  Contact.findByIdAndDelete(req.params.id, (err, students) => {
    console.log(students);

    res.redirect("/students");
  });
});
module.exports = router;