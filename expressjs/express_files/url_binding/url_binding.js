// *******url binding******* 
// *****an example of dynamic route*****
var express=require('express');
var app=express();
const PORT=5000;

// app.get('/:id',function(req,res){
//     res.send('The id you specified is '+ req.params.id);
// });
// app.listen(PORT,()=>{
//     console.log('Server listening on PORT',PORT);
// });

/*****using get method with id and name in url(binding) *****/
// app.get('/things/:id/:name',function(req,res){
//     res.send('id: '+req.params.id + ' and name: '+ req.params.name);
// });
// app.listen(PORT,()=>{
//     console.log('Server listening on PORT',PORT);
// });


/* pattern matched routes in url binding */
app.get('/things/:id([0-9]{5})',function(req,res){
    res.send('id: '+req.params.id);
});



// replacing Cannot GET /things/123456 with a 404 error message
app.get('*',function(req,res){
    res.send('sorry this is an invalid url..');

});
app.listen(PORT,()=>{
    console.log('SERVER RUNNING ON PORT:',PORT);
});