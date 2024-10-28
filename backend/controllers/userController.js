import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'
import 'dotenv/config'

const createToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}


//login user
const loginUser = async(req,res)=>{
  const {email,password} = req.body;
  try {
      const user = await userModel.findOne({email});
      if(!user){
         return res.json({success:false,message:"User does not exists"})
      }
      const isMatched = await bcrypt.compare(password,user.password);
      if(!isMatched){
        return res.json({success:false,message:"Password does not match"});
      }

      const token = createToken(user._id);
      res.json({success:true,token}); 

  } catch (error) {
    console.log(error);
    res.json({success:false,message:"Error logging in"})
  }
}


//register user
const registerUser =async(req,res)=>{
    const {name,password,email} = req.body;
    try {
         const exists = await userModel.findOne({email}) 
         if(exists){
            return res.json({success:false ,message:"user already exists"})
         }
        // validate email n password
        if(!validator.isEmail(email)){
            return  res.json({success:false ,message:"enter valid email"})
        }
        if(password.length < 8){
            return  res.json({success:false ,message:"enter strong password"})
        }
        // create account
        // hashing userpasssword
        const salt = await bcrypt.genSalt(10);
        const hashedPassword =await bcrypt.hash(password,salt);

        const newUser = new userModel({name:name,email:email,password:hashedPassword});
        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({success:true,token})
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error ocurred while registering"})
    }
     
}

export {loginUser,registerUser};