// user schema and model
const mongoose = require('mongoose');

const userschema = new mongoose.schema({
  usernamer: string,
  email: string,
  password: string,
});

module.exports = mongoose.model('user', userschema);
