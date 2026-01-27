import mongoose from "mongoose";

const connectDB = async () => {
    try {
       const connectionInstance = await mongoose.connect
       (`${process.env.MONGODB_URI}`);
       console.log(`MongoDB connected : ${connectionInstance.connection.host}`);  //template literal for printing host using connection instance
    }catch(error){
        console.error(`Error: ${error.message}`);
        process.exit(1); // Exit process with failure
    }
}

export default connectDB;