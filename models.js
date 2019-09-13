const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/belt_api');
var uniqueValidator = require('mongoose-unique-validator');


var PetSchema = new mongoose.Schema({
    name: {type: String, 
        required: true, 
        minlength:[3, "Name must be at least 3 characters"],
        unique: true},
        
    type: {type: String, required: true, minlength:[3, "Name must be at least 3 characters"]},
    description: {type: String, required: true, minlength:[3, "Name must be at least 3 characters"]},
    skill1: {type: String},
    skill2: {type: String},
    skill3: {type: String},
    likes: {type: Number, default: 0}
}, { timestamps: true });

mongoose.model('Pet', PetSchema); 
var Pet = mongoose.model('Pet');

PetSchema.plugin(uniqueValidator);

module.exports = Pet;