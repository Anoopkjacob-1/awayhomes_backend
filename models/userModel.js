
const mongoose = require('mongoose');
const UserTemplate=new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    }
});

module.exports=mongoose.model('users',UserTemplate)