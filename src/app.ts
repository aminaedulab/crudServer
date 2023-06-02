import "reflect-metadata";
import express from 'express';
import { users } from "./Entities/users";
import { DataSource } from "typeorm";
import { Request,Response } from "express";
import cors from "cors";



const AppDataSource =new  DataSource({
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

app.use(cors())
const userRepo =AppDataSource.getRepository(users)

app.get("/",async (req:Request,res:Response)=>{

    const allRecords = await userRepo.find()
    res.send(allRecords)
})




app.get("/h",function(req:Request,res:Response){
    res.send("hello from express");
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
    .set({ name: req.body.name })
    .where("id = :id",{ id: req.params.id })
    .execute()

    res.json({messege:"Done"})

})



    
app.listen(5000,()=>{
    console.log("server running at 5000....")
}) 