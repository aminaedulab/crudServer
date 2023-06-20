


import "reflect-metadata";
// import express from 'express';
import { users } from "./Entities/users";
import {user} from "./Entities/user";

import { DataSource } from "typeorm";
import { Request,Response } from "express";
import cors from "cors";
// import swaggerJSDoc from 'swagger-jsdoc';
// import swaggerUi from 'swagger-ui-express';

import express from 'express';
import swaggerUI from 'swagger-ui-express';
import path from 'path';

import YAML from 'yamljs';
const swaggerJSDocs = YAML.load(path.join(__dirname, 'api.yaml'));
export const AppDataSource =new  DataSource({
    type: "mysql" ,
    host: "localhost",
    port: 3306,
    username: "root",
    password: "admin",
    database: "test",
    entities: [users],
    synchronize: true,
    logging: false
  });
  AppDataSource.initialize().then(()=>{
    console.log("database connected successfully")
}).catch((err)=> console.log("error ",err))

const app=express()
app.use(express.json());
app.use(cors());

// const options={
//     definition:{
//         openapi:'3.0.0',
//         info:{
//             title:'node js api project with mysql',
//             version:'1.0.0',
//             contact:{
//                 name:"skills",
//                 url:"arif.com",
//                 email:"amina@edulab.in"
//             }
//         },
//         servers:[
//             {
//                 url:'http://localhost:5000/'
//             }
            
//         ]
//     },
//     apis:['app.ts'],
// }
// const swaggerSpec = swaggerJSDoc(options)
// app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerSpec))

// /**
//  * @swagger
//  * /:
//  *   get:
//  *     description: This is a get api call
//  *     responses:
//  *       200:
//  *         description: Success
//  */


// app.get("/",function(req:Request,res:Response){
//     res.send("hello from express");
// })

const userRepo =AppDataSource.getRepository(users)

app.get("/api",async (req:Request,res:Response)=>{

    const allRecords = await userRepo.find()
    res.send(allRecords)
})






app.post("/api/users",async (req:Request,res:Response)=>{
    
    console.log("body",req.body)
    const user=await userRepo.create(req.body)
    const results = await userRepo.save(user);   
res.json({
message: "success",
});
})


app.delete("/api/users/:id",async(req:Request,res:Response)=>{

const data=await AppDataSource
    .createQueryBuilder()
    .delete()
    .from(users)
    .where("id = :id", { id: req.params.id })
    .execute()
   console.log(data)
    res.json({data,
        message:"success",
    })
})


app.put("/api/users/:id",async(req:Request,res:Response)=>{
const data=await AppDataSource
    .createQueryBuilder()
    .update(users)
   .set({ 
      name: req.body.name,
      email: req.body.email
    })
    .where("id = :id",{ id: req.params.id })
    .execute()

    res.json({messege:"Done"})

})



    
// app.listen(5000,()=>{
//     console.log("server running at 5000....")
// }) 





app.get('/string', (req, res) => {
  console.log(req.headers);
  res.status(200).send('Users Route');
});

app.get('/user', (req, res) => {
  res.status(200).send({ id: 1, name: 'Tom, Cruise' });
});

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerJSDocs));
app.listen(7000, () => console.log('Up & Running'));

