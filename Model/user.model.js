const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name : {
        type : String,
        required : [true, "first name must be non-empty"]
    },
    last_name : {
        type : String,
        default : null
    },
    email : {
        type : String,
        required : [true, "email must be non-empty"],
        unique : [true, "this email is already registered"]
    },
    password : {
        type : String,
        required : [true, "password must be non-empty"]
    },
    phone : {
        type : Number,
        required : [true , "phone number must be non-empty"]
    },
    token : {
        type : String,
    }
});

module.exports = mongoose.model("user", userSchema);