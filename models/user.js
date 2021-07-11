const mongoose = require('mongoose')



const userSchema = new mongoose.Schema({
    name : {
        type : String,
        minlength : 3,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    age : {
        type : Number
    },
    phone : {
        type : Number
    },
    address : {
        type : String
    }
})


const User = new mongoose.model('User', userSchema)



module.exports = User