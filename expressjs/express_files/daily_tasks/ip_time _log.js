/*example of middleware function*/
var express=require('express');
var app=express();
const fs=require('fs');

//simple request time logger
app.use(function(req,res,next){
    // console.log('A new request received at: '+Date.now());
    // app.enable('trust proxy');
    // console.log('From the IP: '+req.ip);
    // app.set('trust proxy',true);
    const ip_log=`${req.ip}:New request received.\n`;

    
    
    fs.appendFile('iplog.txt',ip_log,(err)=>{
        if(err)
        {
            console.log(err);
            
        }
        else
        {
            console.log(ip_log);    
        }
    });
    next();
});
app.listen(5000);