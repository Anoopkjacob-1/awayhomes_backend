const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config();

const routesurl=require('./routes/routes')


app.use(cors());
app.use(bodyParser.json());



mongoose.connect( 
  process.env.MONGO_BASE_ACESS,
   { useNewUrlParser: true, useUnifiedTopology: true ,useFindAndModify: false}, 
  (err, db) =>{
  if(!err) {
    console.log("We are connected");
  }else{
    console.log(err)
  }
});

app.use('/app',routesurl)

app.listen( process.env.PORT || 80, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});

