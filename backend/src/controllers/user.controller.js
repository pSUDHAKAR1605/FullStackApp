import { User } from "../models/user.model.js";

//controller to handle user registration
const registerUser = async (req,res)=>{
    try{
        const {username, email, password} = req.body;
        
        // Validate required fields
        if(!username || !email || !password){
            return res.status(400).json({message: "All fields are required"});
        }

        // Check for existing user
        const existingUser = await User.findOne({email: email.toLowerCase()});
        if(existingUser){
            return res.status(409).json({message: "User already exists!"});
        }

        // Create new user
        const createUser = await User.create(
            {
                username,
                email,
                password,
                loggedIn: false
            }
        );
        return res.status(201).json({
            message: "User registered successfully",
            createUser:{id:createUser._id, email: createUser.email, username: createUser.username}
        });
    }catch(error){
        return res.status(500).json({"message": "Server Error", error: error.message});
    }
}

const loginUser = async (req,res)=>{
    try{
        const {email, password} = req.body; //destructuring email and password from request body

        const user = await User.findOne({   //finding user by email
            email : email.toLowerCase()   
        });

        //if user not found
        if (!user) return res.status(404).json({message:"User not found"});
        
        //Compare passwords
        const isMatch = await user.comparePassword(password);
        if(!isMatch){
            return res.status(400).json({message:"Invalid password"})
        }
        res.status(200).json({message:"Login Successful", user:{id:user._id, username:user.username, email:user.email}});

    }catch(error){
        return res.status(500).json({message:"Server Error",error:error.message});
    }
}

const logoutUser = async (req, res) =>{
    try{
        const {email} = req.body;

        const user= await User.findOne({
            email: email
        });
 
        if(!user) return res.status(404).json({message:"User not found"});

        res.status(200).json({message: "Logout Successful"});

    }catch(error){
        return res.status(500).json({message:"Server Error",error});
    }
}
export {
    loginUser, logoutUser, registerUser
};

