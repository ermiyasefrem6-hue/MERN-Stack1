const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  numberPhone: {
    type: String,
    required: true
  },
  Age: {
    type: String,
    required: true
  },
  Posion: {
    type: String,
    required: true
  }
    
}, { timestamps: true })

module.exports = mongoose.model('Workout', workoutSchema)