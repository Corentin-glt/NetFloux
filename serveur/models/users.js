const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const userSchema = Schema({
  pseudo: {type: String, required: true},
  password: {type: String, required: true},
  token: {type: String},

});