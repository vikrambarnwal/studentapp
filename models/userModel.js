const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true,
    unique: true  
  },
  password: String,
  mobile: Number,
  gender: String,
  active: {
    type:Boolean,
    default:1
  }
})

module.exports = mongoose.model('UserTable', userSchema)
