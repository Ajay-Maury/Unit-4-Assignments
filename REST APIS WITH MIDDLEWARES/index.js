const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.send("Port is running");
});

app.get("/books", allBooks, (req, res) => {
  return res.send("Consoling :- Fetching all books");
});

function allBooks(req, res, next) {
  console.log("Fetching all books");
  next();
}

app.get("/book/:name", singleBook, (req, res) => {
  res.send({ bookName: req.name });
});

function singleBook(req, res, next) {
  //   console.log(req.params.name);
  req.name = req.params.name;
  next();
}

app.listen(5003, () => {
  console.log("Listening at 5003");
});
