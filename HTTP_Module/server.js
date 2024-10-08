const http = require('http');
// const server=http.createServer((req,res)=>
// {
//     res.end("hello world");
// })

// server.listen(5000 ,()=>{
//     console.log("server listening at port 5000");
// })


/* using req.url property (req is a object and url is a property) to make our server respond differently based on if else conditions
with res.writeHead() ,res.write(), res.end() methods.*/

const server=http.createServer((req,res)=>
{
    if(req.url==='/')
    {
        res.writeHead(200,{'content-type':'text/html'});
        res.write('<h1>Home Page</h1>');
        res.end();
    }
    else if(req.url==='/about')
    {
        res.writeHead(200,{'content-type':'text/html'});
        res.write('<h1>about Page</h1>');
        res.end();
    }
    else if(req.url==='/contact')
    {
        res.writeHead(200,{'content-type':'text/html'});
        res.write('<h1>contact Page</h1>');
        res.end();
    }
    else{
        res.writeHead(200,{'content-type':'text/html'});
        res.write('<h1>404, resource not found <a href="/">Go back home</a></h1>');
        res.end();
    }

})
server.listen(5000,()=>{
    console.log('server listening at port 5000..');
})