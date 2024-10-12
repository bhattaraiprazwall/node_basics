// *******app.method(path,handler) using get() function**********
var express=require('express');
var app=express();
app.get('/hello',function(req,res){
    res.send('<h1>hello world</h1>');
})
app.listen(6000);


//**********app.method() using different methods { app.get(), app.post() } at the same route*********
app.get('/hello',function(req,res){
    res.send('hello world from get method');
})
app.post('/hello',function(req,res){
    res.send('response from post method...');
})
app.listen(7000);



//*********app.all() method********
app.all('/test',function(req,res){
    res.send('method used for defining middleware.');
})
app.listen(5000);