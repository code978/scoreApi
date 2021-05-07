const mongoose = require('mongoose')

const ScoreSchema = new mongoose.Schema({
    Score1:{
        type:Number,
        required:true
    },
    Score2:{
        type:Number,
        required:true
    },
    Score3:{
        type:Number,
        required:true
    },
    date:new Date(),
})

module.exports = mongoose.model('score',ScoreSchema)