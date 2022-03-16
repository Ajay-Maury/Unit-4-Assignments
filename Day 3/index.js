const express=require("express");
const app = express();

app.use(allBooks);

app.get("/books",(req,res)=>{      
     return res.send("Port is running.")
})

function allBooks(req,res,next){
    console.log("Fetching all books");
    next();
}

app.get("/book/:name",login("HerryPoter"),(req,res)=>{
      res.send({"bookName": req.name}) 
});


function login(name){

return function singleBook(req,res,next){
    if(req.params.name ==="HerryPoter")
    {
       console.log("HerryPoter")
       next();
    }
    else if(req.params.name === "GameOfThrones")
    {
        console.log("GameOfThrones")
        next();
    }
    else
    {
        console.log("Book not found")
    }
}

app.listen(5003,  ()=>{
    
})
