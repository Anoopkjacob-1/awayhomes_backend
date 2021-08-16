
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const roomTemplate=new mongoose.Schema({
    hotelId:{
          type: Schema.Types.ObjectId,
          ref: "hotels"
     },
    roomtype: {
        type:String,
        required:true
    },
    price: {
        type:Number,
        required:true
    },
    noofroom: {
        type:Number,
        required:true
    },
    availablity_to: {
        type:Date,
        required:true
    },
    availablity_from: {
        type:Date,
        required:true
    },

});

module.exports=mongoose.model('room',roomTemplate)