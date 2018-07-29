var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String
  }, {timestamps: true});
  
  mongoose.model('User', UserSchema);
  module.exports = User;