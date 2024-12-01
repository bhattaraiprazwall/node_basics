import express from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';
import cookieParser from 'cookie-parser';

var upload =multer();
var app=express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(upload.array());

//require router we defined in movies.js
import movies from './movies.js';

//use the router on the sub route /movies
app.use('/movies',movies);

app.listen(5000);