const express = require("express")
const app = express();
app.use(express.json())
const mongoose = require("mongoose")
const userController = require("./controllers/user.controller")
const connect = ()=>{
    return mongoose.connect("mongodb+srv://pata_nahi:bhool_gaya@cluster0.lsvn5.mongodb.net/validator?retryWrites=true&w=majority")
}

app.use("/users",userController)
app.get("/",(req,res)=>{
    return res.send("Hello")
})
app.listen(4002,async ()=>{
    try {
        await connect();
        console.log("Listening at 4002")
    } catch (error) {
        console.log(error.message)
    }
})