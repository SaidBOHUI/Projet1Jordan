const {Schema, model} = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');

let validateEmail = (email) => {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const userSchema = new Schema({

    username : {
        type : String,
        required : true,
        unique : true
    }, 
    
    email : {
        type : String,
        trim: true,
        lowercase: true,
        unique: true,
        required: false,
        validate: [validateEmail, "Entrez une adresse email valide s'il vous plait"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Entrez une adresse email valide s'il vous plait"]
    },
    age : {
        type : Number,
        required : true
    }
})

userSchema.plugin(uniqueValidator);
const UserModel = model('User', userSchema)

module.exports = {
    UserModel
}
