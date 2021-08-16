const UserTemplate = require("../models/userModel");

// not secure auth
const userAuth = (req, resp) => {
 const {name,password} =req.query
 console.log(password)
  try{
    UserTemplate.find({name:name,password:password})
  .exec((err,user)=>{
     if(err){
      resp.status(400).json({message : "Not valid user"});
    }else{
             resp.status(400).json({data:user});
     }
  });
  }
  catch(error){
      return resp
      .status(400)
      .json({ error: err, message: "Error fetching data" });
  } 
};


module.exports={userAuth}
