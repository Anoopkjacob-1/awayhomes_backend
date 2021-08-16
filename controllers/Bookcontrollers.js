
const  moment = require('moment');
const bookTemplate = require("../models/bookingmodel");

// not secure auth
const isRoomAvail = (req, resp,next) => {
    try{
 
const validarray=[]
const {roomtype,noofroom,date,startdate,enddate,noofdays,totalnoofroom}=req.body
const a = moment(startdate);
const b = moment(enddate);



// If you want an inclusive end date (fully-closed interval)
for (const m = moment(a); m.diff(b, 'days') <= 0; m.add(1, 'days')) {
    let currentday=m.format('DD/MM/YYYY')
    
     if(eachdates(currentday,totalnoofroom,noofroom)){
         validarray.push(true)
     }else{
         validarray.push(false)
     }
    
}
console.log(validarray)
if(validarray.includes(false)){
  console.log("not valid")
}else{
  console.log("valid")
  next()
}
  }
  catch(error){
      return resp
      .status(400)
      .json({ error: err, message: "Error fetching data" });
  } 
};

 async function eachdates (currentday,totalnoofroom,noofroom) {   
   await bookTemplate.findOne({dates:currentday}).then((user)=>{
        if(user!==null){  
            
                let bookedroom=user.datearray.filter(elem => elem.roomid === 22400000).length;
                // const count = arr.filter(elem => elem === 'a').length;
                if(noofroom>totalnoofroom-bookedroom)
                {
                   return false
                }else{
                  return true
                }
         } 
   });
}


const bookcreate=(req,resp)=>{
  try {

    bookTemplate.findOne({dates:req.body.requestid})
    .exec((err,chatdata)=>{
      if(err){
        resp.json( {message :" error "});
      }else{
   if(chatdata)
   {
    const query = { "dates":dates };
    const update = {
      "$push":  {
      "datearray": 
      [{ 
        roomid
      }] 
    }
  };
      const options = { returnNewDocument: true };
      return bookTemplate.findOneAndUpdate(query, update, options)
        .then(updatedDocument => {
          if(updatedDocument) {
            resp.status(200).json({ message: "booked"});
          } else {
            resp.status(200).json({ message: "not booked"});
          }
          return updatedDocument
        });
   }
     if(!chatdata)
         
       {
            const dateinstance = new dates({
              requestid: req.body.requestid,
                datearray:[{ 
                          roomid
                       }]
            });
            console.log(req.body);
            chattinstance
              .save()
              .then((data) => {
                resp.status(200).json({ message:"booked",DATA:data});
              })
              .catch((error) => {
                resp.status(400).json({ error: error, message: " error " });
              });
         }      
      }
    });
         
  } catch (error) {
    return resp
      .status(400)
      .json({ error: error, message: "Error updating" });
  }
}



module.exports={isRoomAvail,bookcreate}



// const BOOKCreate = async(req, res) => {
//     try{
      
//     // const { dates,roomid} = req.body;
//     const user = new bookTemplate({
//         dates:"11/2/2021",
//         datearray:[{ 
//         roomid:"2200000",
//                }]
//     });
//     user
//       .save()
//       .then(() => {
//           console.log("saved")
//           res.status(200).json({ message: "hotel saved"});
//         })
//         .catch((error) => {
//           console.log("ERRROR")
//           res.status(400).json({ error: error, message: "error" });
//         });
//     }
//     catch(error){
//     return res
//     .status(400)
//     .json({ error: err, message: "Error Saving data" });
//     console.log("ERRROR")
//   } 
//   };
