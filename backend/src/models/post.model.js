import mongoose, { Schema } from 'mongoose';

//Schema for character posts
const postSchema = new Schema(
    {
        name:{
           type:String,
           required:true,
           trim:true,
           minLength:3,
           maxLength:100
        },
        description:{
            type:String,
            required:true,
            trim:true,
            maxLength:500
        },
        age:{
            type:Number,
            required:true,
            min:1,
            max:150
        }   
    },
    {
        timestamps:true
    }
)

export const Post = mongoose.model('Post',postSchema);