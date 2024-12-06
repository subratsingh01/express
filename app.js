const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://subratsingh:u8IEesh8Ay143SCF@cluster0.8fkuo.mongodb.net/Swan");

const user_schema = new mongoose.Schema({
    hand_heart: Number,
    heart_face: Number,
    hug: Number,
    heart_gift: Number,
    red_heart: Number,
    shine_heart: Number,
    eye: Number,
    food: Number,
    angry: Number,
    tears: Number,
    satisfy: Number,
    real_heart: Number
})

const model_of_mongoose = mongoose.model("main", user_schema);

const data1 = new model_of_mongoose({
    hand_heart: 1,
    heart_face: 1,
    hug: 20,
    heart_gift: 1,
    red_heart: 1,
    shine_heart: 1,
    eye: 1,
    food: 1,
    angry: 1,
    tears: 1,
    satisfy: 1,
    real_heart: 1
})

data1.save();
const updateDoc = async (_id) => {
    try {
        const r = await model_of_mongoose.updateOne({ _id }, { $inc: { eye: 50 } })
        console.log(r);
    } catch (error) {
        console.log(error)
    }
}

// export function o(){ updateDoc("67425c31b1a07b5f096f56de")};
// document.getElementById("amam").addEventListener("click", ()=>{
    updateDoc("67425c31b1a07b5f096f56de");

// })

//data1.updateOne({ _id: "67425c31b1a07b5f096f56de" }, { $set: { food: 3 } });
console.log("done")