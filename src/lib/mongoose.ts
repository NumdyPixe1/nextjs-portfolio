import mongoose from "mongoose";
const ConnectDB = async () => {
try{
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("MongoDB connected");
}
catch(err){
    console.log("MongoDB connection error:", err);
}
}
export default ConnectDB;