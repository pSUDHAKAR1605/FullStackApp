import { Router } from "express";
import { loginUser, logoutUser, registerUser } from "../controllers/user.controller.js";

const userRouter = Router(); // Create a new router instance
userRouter.route('/register').post(registerUser);  //for single http method userRouter.post('/register', registerUser);
userRouter.route('/login').post(loginUser);        //for multi method userRouter.route('/register').post(registerUser).get(userDetails);
userRouter.route('/logout').post(logoutUser)

export default userRouter;