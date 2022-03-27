const express = require("express");
const connect = require("./config/db");
const userController = require("./controllers/user.controller");
const productController = require("./controllers/product.controller")
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Port is working");
});

app.use("/users",userController)
app.use("/products",productController)


app.listen(6000, async (req, res) => {
  try {
    await connect();
    console.log("Listening at 6000");
  } catch (error) {
    console.log(error.message);
  }
});
