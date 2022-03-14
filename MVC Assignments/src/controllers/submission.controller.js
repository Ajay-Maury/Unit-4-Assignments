const express = require("express")
const router = express.Router()

const Submission = require("../models/submission.model")

router.get("/",async(req,res)=>{
    try{
const batch=await Submission.find().populate({

path:"evaluationId",
select:{dateofevaluation:1}


})
.lean().exec();
return res.send(batch);

    }catch(error){
        return res.status(500).send(error.message); 
    }
})


module.exports = router