var express=require('express');
var router=express.Router();

router.get('/',function(req,res){
    res.end('GET route on routers.js');
})

router.post('/',function(req,res){
    res.end('POST route on routers.js');
});

//exporting this router to use in our index.js file
module.exports=router;