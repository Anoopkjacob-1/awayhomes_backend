const hoteltemplate = require("../models/hotelmodel.js");

const hotelCreate = async(req, res) => {
  try{
    console.log(req.body)
  const { name,country,address} = req.body;
  const user = new hoteltemplate({
    name,
    country,
    address,
  });
  user
    .save()
    .then(() => {
      res.status(200).json({ message: "hotel saved"});
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

const allHotels = (req, resp) => {
  try{
    hoteltemplate.find({})
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

module.exports={allHotels,hotelCreate}




