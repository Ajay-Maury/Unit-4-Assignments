const Batch = require("../models/batch.model")
const express = require("express")
const router = express.Router();

router.get("/",async(req,res)=>{
    try{
const batch=await Batch.find().populate({
    path:"studentId",
    select:{userId:1}
}).
lean().exec();
return res.send(batch);

    }catch(error){
        return res.status(500).send(error.message); 
    }
})

module.exports = router