import express from "express";
import postRouter from "./routes/post.route.js"; //import post routes
import userRouter from "./routes/user.route.js"; //import user routes

const app = express();  //create an express app

app.use(express.json()) //middleware to parse JSON request bodies

//route declarations
app.use("/api/v1/users", userRouter); //user route
app.use("/api/v1/posts", postRouter); //post route

//example route:http://localhost:8000/api/v1/users/register

export default app;