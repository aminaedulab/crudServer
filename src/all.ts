


// const app = express()
// app.use(express.json());
// // app.use(cors());
// // app.use('/users', userRouter);
// const port = 4000;

// app.get("/",function(req,res){
//     res.send("hello from express");
// })





// app.get("/api",(req,res)=>{
//     User.find().then((data)=>{
//         res.json(data)
//     });
// });
// // app.get("/api",async (req,res)=>{
// //     const userRepo = AppDataSource.getRepository(User)
// //     const allRecords = await userRepo.find();
// //     res.send(allRecords)
// //     });

// // app.delete("/",async (req,res)=>{
// //     const userRepo = AppDataSource.getRepository(User)
// //     await userRepo.delete(2)
// //     // res.json(allRecords);
// //     });


// app.post("/",(req,res)=>{
//    User.insert({
//     id:4,
//     name:"helooo",
//     decription:"welcome",
//     // status:false,
//    })
// })

// const AppDataSource = new DataSource({
//     type:"mysql",
//     host:"localhost",
//     port:3306,
//     username: "root",
//     password:"admin",
//     database:"test",
//     logging:true,
//     synchronize:true,
//     entities:[User]
    
    
    
    
//     //   type: "mongodb",
//     //   host: "127.0.0.1",
//     //   port:27017,
//     //   database: "interns",
//     //   username: "mongodb",
//     //   password: "admin"
//     //   "entities": ["src/**/**.entity{.ts,.js}"]
    
      
//     });
//     AppDataSource.initialize().then(()=>{
//         console.log("database connected successfully")
//     }).catch((err)=> console.log("error ",err))



// app.listen(port,()=>{
//     console.log(`listening to the port ${port}`)
// });

// import "reflect-metadata";
// import {  myDataSource } from "./connection/connection"
// import express from 'express';
// import bodyParser from "body-parser";
// import cors from 'cors';
// // import { DataSource } from "typeorm";
// import { users } from "./Entities/users";
// import { router } from "./router/router";

// const app=express()
// app.use('/',router)
// app.use(cors());
// app.use(express.json())
// const server=app.listen(5000,()=>{
//     console.log("server running at 5000....")
// })
// app.get("/api",(req,res)=>{
//     res.send("Welcome to API")
// })
// // myDataSource.then(
// //     async myDataSource=>{
// //         console.log("connected")
      
//   const usersRepository = myDataSource.getRepository(users);
   

//   app.get("/api/users",async (_req,res)=>{
//     const users=await usersRepository.find()
//     res.send(users)
// })
// app.post("/api/users",async (req,res)=>{
    
//     console.log("body",req.body)
//     const user=await usersRepository.create(req.body)
//     const results = await usersRepository.save(user);
    
// res.json({
// message: "success",
// payload: results
// });
// })
// app.get("/api/users/:id",async(req,res)=>{
// console.log("called")
//   console.log(req.params.id)
//   const user=await usersRepository.findOne({where:{ id:Number( req.params.id) }})
//   res.json({
//       message:"success",
//       payload: user
//   })
// })


// app.delete("/api/users/:id",async(req,res)=>{
// const user=await usersRepository.delete(req.params.id)
// res.json({
//     message:"success",
// })
// })
// app.put("/api/users/:id",async(req,res)=>{
//     const {name,decription,status}=req.body
//     const upuser=new users()
//     upuser.name=name
//     upuser.decription=decription
//     upuser.status=status

// const user = await usersRepository.findOne({where:{id:Number(req.params.id)}})
// if(!user){
//     return res.send("eddkddjk")
// }
// // usersRepository.merge(user, req.body);
// user.name=name
// user.decription=decription
// upuser.status=status
// const result = await usersRepository.save(user);
// res.json({
//     message:"success",
//     payload:result
// })

// })



// .catch(error=>{
//     console.log(error)
// })