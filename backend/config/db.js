import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://FoodDelivery:123@cluster0.nfa56.mongodb.net/food-del').
    then(()=>console.log("DB connected"))
}