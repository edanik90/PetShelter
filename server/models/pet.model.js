const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const PetSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please, enter the pet's name"],
        minlength:[3, "Name must be at least 3 characters long"],
        unique:true
    },
    type:{
        type:String,
        required:[true, "Please, enter the pet's type"],
        minlength:[3, "Type must be at least 3 characters long"],
    },
    description:{
        type:String,
        required:[true, "Please, enter the pet's description"],
        minlength:[3, "Description must be at least 3 characters long"],
    },
    skillOne:{
        type:String,
        default: ""
    },
    skillTwo:{
        type:String,
        default: ""
    },
    skillThree:{
        type:String,
        default: ""
    },
    likes:{
        type:Number,
        default:0
    }
}, { timestamps: true })

PetSchema.plugin(uniqueValidator, { message: 'Sorry, We already have a pet with this name' });
module.exports.Pet = mongoose.model("Pet", PetSchema);