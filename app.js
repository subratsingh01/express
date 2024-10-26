const express = require("express");
const app = express();

app.get("/hi", (req, res) => {
    res.send("ha batao kya hua");
})

app.listen(3000, () => console.log("listening on port 3000..."))