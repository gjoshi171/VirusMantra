const express = require('express');
require('dotenv').config()
require("./userDetailsPlasma")

const app = express()
app.use(express.json())
const mongoose = require('mongoose');
const cors= require("cors");
const bcrypt= require("bcryptjs");
const jwt = require("jsonwebtoken")

const JWT_SECRET= "eyJzdWIiOiIxMjM0NTY3fakjsf8feTl8f4j34of";

app.use(cors());

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser:true, useUnifiedTopology:true}).then(()=> {
    console.log('Database is connected')
}).catch(err=> console.log(err.message))


app.listen(8081, () =>{
    console.log("port is working");
});

const User = mongoose.model("userInfoPlasma")

app.post("/register", async(req, res)=>{
    const { fullName, email, password, 
    city,
    state,
    country,
    contactNo,
    fullAddress,
    bloodType} = req.body;
    //const {fname,lname, email, password} = req.body;
    try{
        const encryptedPassword = await bcrypt.hash(password, 10);
        const olduser = await User.findOne({email});
        console.log( "this is console" + olduser)
        if(olduser){
           return res.send({error: "User Exists"})
        }
        //const encryptedPassword = await bcrypt.hash(password, 10);
        await User.create({
            fullName,
            email,
            password: encryptedPassword, 
            city,
            state,
            country,
            contactNo,
            fullAddress,
            bloodType,
        });
        res.send({status:"OK"})
    } catch (error){
        res.send({status:"error"})
    }
});

// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   try{
//   const user = await User.findOne({email});
//   console.log(user)
//   if (user==null) {
//     return res.json({ error: "User Doesn't Exist" });
//   }
//   if (await bcrypt.compare(password, user.password)) {
//     const token = jwt.sign({}, JWT_SECRET, {
      
//     });

//     if (res.status(201)) {
//       return res.json({ status: "ok", data: token });
//     } else {
//       return res.json({ error: "error" });
//     }
//   }
//   res.json({ status: "error", error: "InvAlid Password" });
// }
// catch (error){
//   res.send({status:"error"})
// }
// });

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    
    if (user==null) {
      return res.status(400).json({ error : "email or password missing "});
    }
    
    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if ( isPasswordValid) {
      const token = jwt.sign({}, JWT_SECRET, {
        // Additional JWT options if needed
        
      });

      return res.json({ status: "OK", data: token });
    }
    if(user.email==email && !isPasswordValid) {
      return res.status(400).json({ error: "Wrong password" });
    }
    else {
      return res.status(400).json({ error: "User doesn't exist" });
    }
  } catch (error) {
    console.error('Error occurred while logging in:', error);
    return res.status(400).json({ status: "error"});
  //  res.status(500).json({ status: "error" });
  }
});


app.get("/getDonar/:city/:bloodType", async(req, res)=>{
  fetchCity= req.params.city
  fetchblood= req.params.bloodType
  try {
   
      const allUser = await User.find({city: fetchCity, bloodType: fetchblood}).select("fullName bloodType city state country contactNo");

     return res.json(allUser)
      res.send({status:"OK", data: allUser})
  } catch (error){
      res.send({status:"error"})
   
  }
});


