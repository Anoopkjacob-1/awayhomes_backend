const hoteltemplate = require("../models/hotelmodel.js");
const roomtemplate = require("../models/roommodel.js");

const search = (req, resp) => {
    const{data}=req.body
   try{
    hoteltemplate.find({place:data})
   .exec((err,Users)=>{
      if(err){
       resp.status(400).json({message : "NO hotels Found in this place"});
      }else{
          resp.json(Users);
      }
   });
   }
   catch(error){
       return resp
       .status(400)
       .json({ error: err, message: "Error fetching data" });
   } 
 };

 const filter = (req, resp) => {
    const{roomtype,place}=req.body
   try{
     roomtemplate.find({roomtype:roomtype})
   .exec((err,room)=>{
      if(err){
       resp.status(400).json({message : "NO room Found in room type"});
      }else{
        hoteltemplate.find({place:place})
   .exec((err,hotels)=>{
      if(err){
       resp.status(400).json({message : "NO hotels Found in place"});
      }else{
          resp.json({...room,hotels});
      }
   });
      }
   });
   }
   catch(error){
       return resp
       .status(400)
       .json({ error: err, message: "Error fetching data" });
   } 
 };
 



 module.exports={search,filter}