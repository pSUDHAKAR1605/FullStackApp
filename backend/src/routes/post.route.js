import { Router } from "express";
import { createPost, deletePost, getPosts, updatePost } from "../controllers/post.controller.js";

const postRouter = Router(); // Create a new router instance for posts

postRouter.route('/createpost').post(createPost);
postRouter.route('/readposts').get(getPosts);
postRouter.route('/updatepost/:id').patch(updatePost);
postRouter.route('/deletepost/:id').delete(deletePost);

export default postRouter;