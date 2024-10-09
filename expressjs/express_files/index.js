// step:1 importing the express module
var express= require('express');

//step 2:creating an instance of express by calling the express function
// 'app' will now have methods to define the routes and start the server
var app =express();

// Step 3: Define a GET route for the root URL ('/').
// When a client sends a GET request to '/', this function will be executed.
app.get('/',function(req,res){
    //step 4: send a response back to the server with a message
    res.send("hello world!");
});

// Step 5: Start the server and have it listen on port 3000.
// When the server starts, it will listen for incoming requests on localhost:3000.
app.listen(5000);

