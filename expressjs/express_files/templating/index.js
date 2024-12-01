const express=require('express');
const app=express();
app.set('view engine','pug');
app.set('views','./views');

app.get('/first_template',function(req,res){
    res.render('first_view');
});

app.get('/dynamic_view',(req,res)=>{
    res.render('dynamic',{
        name:"Prajwal Bhatttarai",
        url:"http://www.google.com"
    });
});

app.get('/conditionals',(req,res)=>{
    res.render('conditionals',{
        user:{name:"Prajwal",age:"22"}
    });
});

app.get('/components',(req,res)=>{
    res.render('content');
});

app.listen(5000);