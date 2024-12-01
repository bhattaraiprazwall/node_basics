/*example of middleware function*/
var express=require('express');
var app=express();

//simple request time logger
// app.use(function(req,res,next){
//     console.log('A new request received at: '+Date.now());
//     next();/*this function call is very important as it tells that more
//     processing is required for the current request and is in the next
//     middleware.*/
// });
// app.listen(5000);


// /*use of middleware to to respond  in a specific route*/
// app.use('/things',(req,res,next)=>{
//     console.log('A request for things received at '+ Date.now());
//     next();
// });

// //route handler that sends the response
// app.get('/things',(req,res)=>
// {
//     res.send('Things');
// });

/* ********order of middleware calls *******/
//First middleware before response is sent
app.use(function(req,res,next){
    console.log('start');
    next();
});

//route handler
app.get('/',(req,res,next)=>{
    res.send('Middle');
    next();
});

app.use('/',(req,res)=>{
    console.log('end');
});
app.listen(5000);



