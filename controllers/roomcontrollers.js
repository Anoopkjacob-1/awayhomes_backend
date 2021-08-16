const roomtemplate = require("../models/roommodel.js");

const rooomCreate = async(req, res) => {
  try{
    console.log(req.body)
  const {roomtype,price,availablity_to,availablity_from} = req.body;
  const user = new roomtemplate({
    roomtype,
    price,
    availablity_to,
    availablity_from,
  });
  user
    .save()
    .then(() => {
      res.status(200).json({ message: "room created"});
    })
    .catch((error) => {
      res.status(400).json({ error: error, message: "error" });
    });
  }
  catch(error){
    return res
    .status(400)
    .json({ error: err, message: "Error Saving data" });
} 
};

const allrooms = (req, resp) => {
  console.log(req.query)
  try{
    roomtemplate.find({})
  .exec((err,Users)=>{
     if(err){
      resp.status(400).json({message : "NO hotels Found"});
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

const singlerooms = (req, resp) => {
   const{id}=req.body
  try{
    roomtemplate.find({id:id})
  .exec((err,Users)=>{
     if(err){
      resp.status(400).json({message : "NO hotels Found"});
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


module.exports={allrooms,rooomCreate,singlerooms}



