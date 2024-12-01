import express from 'express';
import bodyParser from 'body-parser';
import generateToken from './jwtUtils.js';

const app=express();
const PORT=3000;

//middleware
app.use(bodyParser.json());

//middleware for JWT Token Validation
import jwt from 'jsonwebtoken';
const validateToken= (req,res,next)=> {
    const authHeader=req.headers.authorization;

    if(authHeader){
        const token= authHeader.split(' ')[1]; //Bearer <token>
        jwt.verify(token,'yourSecretKey',(err,payload)=>{
            if(err){
                return res.status(403).json({
                    success:false,
                    message:'Invalid Token',
                });
            }
            else{
                req.user=payload;
                next();
            }
        });
    }
    else{
        res.status(401).json({
            success:false,
            message:'Token is not provided',
        });
    }
};

//Hardcoded User Data (In real-world scenario, this would be retrieved from a database)
const user={
    id:1,
    username:'prajwal',
    password:'helloworld'

};

//login route
app.post('/login',(req,res)=>{
    const {username, password} = req.body;

    //check if username and passwords match
    if(username==user.username && password==password){
        //Generating JWT token
        const token=generateToken(user);

        res.json({
            success:true,
            message:'Authentication successfull!',
            token:token,
        });
        
    }
    else{
        res.status(401).json({
            success:false,
            message:'Invalid username or password',
        });
    }
});

//protected route
app.get('/protected',validateToken,(req,res)=>{
    res.json({
        success:true,
        message:'Welcome to the protected route !',
        user:req.user,
    });
});

//start the server
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});