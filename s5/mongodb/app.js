const express=require('express');
const logger = require("morgan");
const createError = require("http-errors");
const mongoose = require('mongoose');
const dbConfig = require("./database/mongodb.json");
const studentRouter = require("./routes/students.js");




const app=express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/students", studentRouter);
app.use((req,res,next) =>{
 next(createError(404))

});


mongoose.connect(dbConfig.mongo.uri, {     useNewUrlParser: true ,      useUnifiedTopology: true 
  },  ()=> console.log("Connected to mongoDB !!") ,
   );



module.exports=app;



