const express = require('express');
var app = express();

app.get('/', (req, res,next) => {
    console.log("hello");
});

app.listen(1111);