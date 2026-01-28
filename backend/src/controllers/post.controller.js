import { Post } from "../models/post.model.js";

//Create a post controller
const createPost = async (req, res)=>{
    try{
        //assigning received data from body of request
        const {name, description, age}= req.body;

        //Checking if all fields are non-empty or valid
        if(!name || !description || !age){
            return res.status(400).json({
                message:"Invalid or missing fields"
            });
        }
        
        //Creating post for characters using Post(character post) model
        //which is created by using postSchema(can use this schema for any similar models like animalPost)
        const post= await Post.create({
            name,
            description,
            age
        });
        
        //Post creation response
        res.status(201).json({message:"Post created",post});


    } catch(error){
          res.status(500).json({message:"Server Error:",error});
    }
}

//Read Posts
const getPosts = async(req,res)=>{
    try{
       const getposts = await Post.find();
       res.status(200).json(getposts);
    }catch(error){
        return res.status(500).json({message: "Server Error", error});
    }
}

//Update a Post
const updatePost = async(req,res)=>{
    try{
        //basic validation to check if the body is empty
        //{}=truthy
        if(Object.keys(req.body).length === 0){          //Parses JSON->req.body->js obj->{ name "New name", description: "Updated" } to  Object.keys(req.body) ->["name, "descr"] if eq 0,
            return res.status(400).json({message:"No field is provided to update"});   //this executes
        }

        const updatepost = await Post.findByIdAndUpdate(req.params.id,req.body,{new:true});  //go to doc with requested post id -> update in doc fields with req.body, return updated val to var(updatepost)
        
        if(!updatepost) return res.status(404).json({message:"Post not found"}); //if post is not found
        
        res.status(200).json({message:"Updated successfully",updatepost});   //response for updating post successfully
    }catch(error){
        return res.status(500).json({message: "Server Error", error});
    }
}

//Delete a Post
const deletePost = async(req,res)=>{
    try {
        const deletepost = await Post.findByIdAndDelete(req.params.id);
        if(!deletepost) return res.status(404).json({message:"Post not found"}); //if post is not found
        res.status(200).json({message:"Deleted successfully"});   
    } catch (error) {
        
    }
}

export { createPost, deletePost, getPosts, updatePost };

