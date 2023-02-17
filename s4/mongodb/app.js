const express=require('express');
const logger = require("morgan");
const createError = require("http-errors");
const contactRouter = require("./routes/contacts");



const app=express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/contacts", contactRouter);

app.use((req,res,next) =>{
 next(createError(404))

});






module.exports=app;



