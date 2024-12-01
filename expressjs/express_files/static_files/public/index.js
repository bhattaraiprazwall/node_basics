// Static files are files that clients download as they are from the server.
const express=require('express');
const app=express();

app.use('/static_file_serve',express.static('public'),(req,res)=>{
    res.render('static_file');
});

app.listen(5000);