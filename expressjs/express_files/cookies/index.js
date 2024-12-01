import cookieParser from "cookie-parser";
import express from 'express';
var app=express();
app.use(cookieParser());

app.get('/',function(req,res){
    res.cookie('name','express').send('cookie set'); //sets name=express
    console.log("Cookies :",req.cookies);
});

app.listen(3000);


// adding cookies with expiration time
res.cookie(name,'value',{expire:360000+Date.now()}); //using 'expire' property

res.cookie(name,'value',{maxAge:36000}); //using 'maxAge' property


/****************Deleting existing cookies ***************/
//using 'clearCookie' function

app.get('/clear_cookie_foo',function(req,res){
    res.clearCookie('foo');
    res.send('cookie foo cleared');
});
