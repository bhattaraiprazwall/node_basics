import express from 'express';
var app=express();
app.get('/',function(req,res){
    //create an error and pass it to the next function
    var err=new Error("Something went wrong");
    next(err);
});

// an error handling middleware

app.use(function(err,req,res,next){
    res.status(500);
    res.send("Oops,something went wrong..");
});

app.listen(5000);