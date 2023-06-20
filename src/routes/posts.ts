// const router = require("express").Router();
// const { publicPosts, privatePosts } = require("../database");
// const authToken = require("../middleware/authenticateToken");

// router.get("/public", (req:Request, res:Response) => {
//   res.json(publicPosts);
// });

// router.get("/private", authToken, (req:Request, res:Response) => {
//   res.json(privatePosts);
// });

// module.exports = router;

// import { Router, Request, Response } from "express";
// import { publicPosts, privatePosts } from "./database.ts";
// import authToken from "../middleware/authenticateToken";

// const router: Router = Router();

// router.get("/public", (req: Request, res: Response) => {
//   res.json(publicPosts);
// });

// router.get("/private", authToken, (req: Request, res: Response) => {
//   res.json(privatePosts);
// });

// export default router;
