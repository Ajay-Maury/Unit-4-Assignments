const express = require("express")
let books = {
  book1 : "Harry Potter",
  book2 : "Lord of the rings",
  book3 : "Wings of Fire",
  book4 : "You don't Know JavaScript"
}
const app = express();

app.get("/", function (req, res) {
    res.send("Hello");
  });
app.get("/books", function (req,res){
  res.send(books)
})

  app.listen(4000, () => {
    console.log("listening on port 4000");
  });