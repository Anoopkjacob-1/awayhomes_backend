
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bookTemplate=new mongoose.Schema({
    dates:{
          type: String,
          required:true
     },
     datearray:[{ 
        roomid:{
              type:Number,
              required:true
           }
}]

});

module.exports=mongoose.model('books',bookTemplate)