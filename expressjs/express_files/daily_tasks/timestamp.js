const express=require('express');
const fs=require('fs');
const app=express();

app.get('/',function(req,res){

    const timestamp=`${Date.now()}`;


    //sending timestamp in milliseconds as a response
    res.send(`Current timestamp: ${timestamp}`);

    //saving the timestamp into timestamp.txt
    fs.appendFile('timestamp.txt',`Timestamp : ${timestamp}\n`,(err)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log(`${timestamp}`);
        }

    });
});

app.listen(5000);