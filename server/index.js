const express =  require('express');
const cors =  require("cors");
const mongoose = require("mongoose");
const  bodyParser=require("body-parser")
const userRoutes =  require("./routes/users")
const orphangeRoutes = require( './routes/orphangeRoute')
const contactRoutes = require("./routes/contactRoutes")

require("dotenv").config()
const app= express();
const port = process.env.port  || 9000;
let server;

//middleware
app.use(cors());
app.use(bodyParser.json({limit:'20mb'}))
app.use(bodyParser.urlencoded({extended:true, limit:"20mb"}));

app.use('/api/users',userRoutes)
app.use('/api/orphanges/',orphangeRoutes )
app.use('/api/contact/',contactRoutes )
//DB connection 


mongoose.connect(process.env.DB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> console.log("Connected to database")).catch((error)=>console.log(error));

server  = app.listen(port , () => {
    console.log(`Server is running on ${port}`)
});