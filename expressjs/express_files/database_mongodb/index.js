//connecting app to database
const express=require('express');
const app=express();
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/prajwal_db');

//defining schema for a person
var personSchema=mongoose.Schema({
    name:String,
    age:Number,
    nationality:String
});

// creating a new mode ,that will act as a collection in mongodb database
var Person=mongoose.model("Person",personSchema);

//setting the templating engine for the app
app.set('view engine','pug');
app.set('views','./views');

//middeware to parse url encoded data from forms
app.use(express.urlencoded({ extended: true }));

app.get('/person',(req,res)=>{
    res.render('person');
});

//post route handler for ('/person)

app.post('/person',async (req,res)=>{
    var personInfo=req.body; // for getting the parsed info
    if(!personInfo.name || !personInfo.age || !personInfo.nationality){
        res.render('show_message',{
            message:'Sorry, you provided wrong info', type:"error"
        });
    }
    else{
        try{
        var newPerson = new Person({
            name:personInfo.name,
            age:personInfo.age,
            nationality:personInfo.nationality
        });

        //save the new person to the database using async/await
        await newPerson.save();
         res.render('show_message',{
            message:'New person added',
            type:'success',
            person:personInfo
         });
        }catch(err){
            res.render('show_message',{
                message:'Database error',
                type:'error'
            });
        }
    }
});


app.listen(3000,()=>{
    console.log("Server is running on port 3000..")
});