const mongoose = require("mongoose");
const dotenv= require("dotenv");

dotenv.config({
    path:"../../.env"
})

const connectDatabase = async() => {
    await mongoose.connect(String(process.env.MONGO_URI),{
        useNewUrlParser:true,
        useFindAndModify:false,
        useUnifiedTopology:true
    })
        .then(() => console.log("Connection successfull."))
        .catch((err) => {
            return new Error(`Not connected ${err}`);
        })
}

module.exports = connectDatabase;