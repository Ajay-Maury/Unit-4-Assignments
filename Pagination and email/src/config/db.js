const mongoose = require("mongoose")

module.exports = () => {
    return mongoose.connect("mongodb+srv://pata_nahi:bhool_gaya@cluster0.lsvn5.mongodb.net/pagination?retryWrites=true&w=majority");
}