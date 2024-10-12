var express=require('express');
var app=express();
var routers=require('./routers.js');

//both index.js and routers.js file should be in the same directory
app.use('/routers',routers);
app.listen(5000);