const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("ha batao kya hua slash me ho tum => paglu home");
})

app.get("/hi", (req, res) => {
    res.send("ha batao kya hua hi bo rhe ho jo");
})

app.get("/bye", (req, res) => {
    res.send("ha batao kya hua bye mt bolo");
})

app.get("/subrat", (req, res) => {
    res.send("ha batao kya hua subrat");
})

app.listen(3000, () => console.log("listening on port 3000..."))