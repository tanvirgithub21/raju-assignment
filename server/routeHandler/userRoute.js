const express = require("express")
const mongoose = require("mongoose")
const route = express.Router()
const loginRecordSchema = require("../schemas/loginRecordSchema")

const User = new mongoose.model("user", loginRecordSchema)


// user router
// Get all users
route.get("/", (req, res) => {
    // all user get in mongodb server with mongoose
})

// Get a single user
route.get("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const findUser = await User.findById(id)
        if (findUser) {
            console.log(findUser);
            res.status(200).json({
                message: "Find user successfully",
                result: findUser
            })
        } else {
            res.status(500).json({ error: "this is server side error" })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "this is server side error" })
    }

})

// create a single user
// sent data to body:- {...data}
route.post("/create", async (req, res) => {
    // all user get in mongodb server with mongoose
    try {
        const newUser = new User(req.body)
        const result = await newUser.save()
        if (!result) {
            res.status(500).json({ error: "this is server side error" })
        } else {
            res.status(200).json({ result: result })
        }
    } catch {
        res.status(500).json({ error: "this is server side error" })
    }

})

// every time login track time track
// sent data to body:- {email: "tanvir@gmail.com",provider: "email || google"}
route.put("/login", (req, res) => {
    try {
        User.findOneAndUpdate(
            { email: req.body.email },
            {
                $push: {
                    loginRecords: {
                        provider: req.body.provider
                    }
                }
            },
            {
                upsert: true,
                new: true
            }
        )
            .then((user) => {
                res.status(200).json({
                    message: "Login successfully",
                    result: user,
                })
            })
            .catch((err) => {
                res.status(500).json({ error: "this is server side error" })
            });
    } catch {
        res.status(500).json({ error: "this is server side error" })
    }

})

// delete a single user
// sent data to params:- http://localhost:5000/user/delete/id type hear...
route.delete("/delete/:id", async (req, res) => {
    const { id } = req.params
    try {
        const deleteUser = await User.findByIdAndDelete(id)
        if (deleteUser) {
            console.log(deleteUser);
            res.status(200).json({ message: "Delete user successfully" })
        } else {
            res.status(500).json({ error: "this is server side error" })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "this is server side error" })
    }

})

module.exports = route