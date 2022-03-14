const express=require("express")

const app=express();
app.use(express.json())


const mongoose=require("mongoose")

const connect=()=>{

    return mongoose.connect(
        "mongodb+srv://KanishkaRajput:khushy1234@cluster0.516ub.mongodb.net/MVC?retryWrites=true&w=majority"
        )
}

const User=require("./models/user.model");
const userController=require("./controllers/user.controler");
app.use("/users",userController);

const Student = require("./models/student.model")
const studentsController = require("./controllers/students.controller")
app.use("/students",studentsController)

const Batch = require("./models/batch.model")
const batchController = require("./controllers/batch.controller")
app.use("/batches",batchController)

const Evaluation = require("./models/evaluation.model")
const evaluationController = require("./controllers/evaluation.controller")
app.use("/evaluations",evaluationController)

const Submission = require("./models/submission.model")
const submissionController = require("./controllers/submission.controller")
app.use("/submissions",submissionController)


app.post("/submissions",async(req,res)=>{

    try{
    const user=await Student.create(req.body);
     return res.status(200).send(user);
    }
    catch(error){
       return res.status(500).send(error.message);
    }
    
    });

    


    

    app.get("/maxmarks",async(req,res)=>{
        try{
    const batch=await Submission.findById().sort({Marks:-1}).limit(1).populate({    
    path:"evaluationId",
    select:{dateofevaluation:1}    
    })
    .lean().exec();
    return res.send(batch);
    
        }catch(error){
            return res.status(500).send(error.message); 
        }
    });
    
app.listen(4000,async()=>{
    try{
await connect();
console.log("Listening at port 4000");
    }catch(error){
        console.log("error:"+" "+error);
    }
});

