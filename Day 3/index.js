const express=require("express");
const app=express();

app.use(allBooks);
app.get("/books",(req,res)=>{
      
 
});

function allBooks(req,res,next){
    console.log("Fetching all books");
    next();
}
app.get("/book",login("Herry Poter"),(req,res)=>{
      res.send("Harry")
 
});

function login(role){

return function singleBook(req,res,next){
    if(role==="Herry-Poter"){
       console.log("he")
   next();
}
if(role==="Titenic"){
    console.log("hell");
    next();
 }
}
}
app.listen(5003,  ()=>{

console.log("Hii");

});
