const mongoose = require('mongoose');

const HeroSchema = new mongoose.Schema({
    superHero: {
        type : String,
        required : [true, 'please name the hero'],
        unique: true
    },
    realName : {
        type : String,
        required: true,
        maxlength : [200, 'Please keep the real name short']
    }
})

module.exports = mongoose.models.Hero || mongoose.model('Hero', HeroSchema)