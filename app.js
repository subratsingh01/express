const express = require("express");
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://subratsingh:u8IEesh8Ay143SCF@cluster0.8fkuo.mongodb.net/userappnew");
const app = express();


const User = mongoose.model("user", {
    name: String
    
})





app.get("/", (req, res) => {
    res.send("ha batao kya hua slash me ho tum => paglu home");
})

app.get("/create", (req, res) => {
    const id = req.query.user;
    const user = new User({
        name: id
    });
    user.save();
    res.send("ha batao kya hua hi bo rhe ho jo");
})

app.get("/bye", (req, res) => {
    res.send("ha batao kya hua bye mt bolo");
})

app.get("/subrat", (req, res) => {
    res.send("ha batao kya hua subrat");
})

app.listen(3000, () => console.log("listening on port 3000..."))