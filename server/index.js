const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

// import External router
const userRouter = require("./routeHandler/userRoute")

// server port 
const port = process.env.PORT || 5000;

//middleware
app.use(cors())
app.use(express.json())

// connect mongodb database 
mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.p45tuho.mongodb.net/?retryWrites=true&w=majority`)
    .then(database => console.log("connect successfully"))
    .catch(err => console.log(err))


// user route define 
app.use("/user", userRouter)



app.get("/", (req, res) => {
    res.send(`Server is go on ${port}`)
})

app.listen(port, () => {
    console.log('listen to port, ', port);
})