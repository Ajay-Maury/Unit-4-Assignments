const express = require("express")
const User = require("../models/users.model")
const router = express.Router()

router.get("", async (req, res) => {
    try {
        const users = await User.find({}).lean().exec()
        res.send(users)
    } catch (error) {
        res.send(error.message)
    }
})

router.post("", async(req, res) => {
    try {
        const user = await User.create(req.body)
        res.send(user)
    } catch (error) {
        res.send(error.message)
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id).lean().exec()
        res.send(user)
    } catch (error) {
        res.send(error.message)
    }
})

router.patch("/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
        res.send(user)
    } catch (error) {
        res.send(error.meessage)
    }
})

module.exports = router