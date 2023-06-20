// import { Request, Response, NextFunction } from "express";
// import jwt from "jsonwebtoken";
// import dotenv from "dotenv";

// dotenv.config();

// const authToken = async (req: Request, res: Response, next: NextFunction) => {
//   // Option 1
//   // const authHeader = req.headers["authorization"];
//   // const token = authHeader && authHeader.split(" ")[1]; // Bearer Token

//   // Option 2
//   const token = req.header("x-auth-token");

//   // If token not found, send error message
//   if (!token) {
//     res.status(401).json({
//       errors: [
//         {
//           msg: "Token not found",
//         },
//       ],
//     });
//     return;
//   }

//   // Authenticate token
//   try {
//     const user = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string);
//     req.user = user.email;
//     next();
//   } catch (error) {
//     res.status(403).json({
//       errors: [
//         {
//           msg: "Invalid token",
//         },
//       ],
//     });
//   }
// };

// export default authToken;
