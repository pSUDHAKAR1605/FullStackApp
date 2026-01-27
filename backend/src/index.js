import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/database.js";

dotenv.config({
    path:'./.env'  
});

const startServer = async() => {
    try{
        await connectDB();  //connect to database
        app.on("error",(error)=>{          
            console.log("ERROR",error);    
            throw error;
           });
        app.listen(process.env.PORT || 5000, ()=>{
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    } catch(error){
        console.error(`Failed to start server: ${error.message}`);
    }
    
}

startServer();

