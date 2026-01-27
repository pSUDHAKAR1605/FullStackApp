import bcrypt from "bcrypt";
import mongoose, { Schema } from "mongoose";

 const userSchema = new Schema(
    {
        username: {
            type : String,
            required : true,
            unique : true,
            trim : true,
            minLength : 3,
            maxLength : 30
        },
        password: {
            type: String,
            required: true,
            minLength: 8,
            maxLength: 40
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true
        }

    },
    {
        timestamps: true
    }
 )

//pre-save hook to hash password before saving user document
userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
});

//Compare given password with hashed password
userSchema.methods.comparePassword = async function (password){
    return await bcrypt.compare(password, this.password);
}

export const User = mongoose.model("User",userSchema);
 