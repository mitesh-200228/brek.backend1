require('dotenv').config()
const express = require('express');
const connection = require('./connection/connection.js');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = process.env.PORT
const cors = require('cors')

connection();
const corsOption = {
    origin:['http://localhost:3000','https://brekfrontend11-09.azurewebsites.net/','https://ayush-tiwari26.github.io/website_brek.frontend/']
};

app.use(cors(corsOption));
app.use(cookieParser());
app.use(express.json());
require('./routes/web')(app);

app.listen(PORT,(req,res)=>{
    console.log(`Server is running on ${PORT}`);
});