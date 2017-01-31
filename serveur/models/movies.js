const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const userSchema = Schema({
  title: {type: String, required: true},
  dateAdd: {type: Date, default: Date.now},
  users: {type: ObjectId, ref: 'User'},
  dateProduction: {type: Date, required: true},
  actors: [{type: String, required: true}],
  image: {type: String},
  description: {type: String},
  category: [{type: String, required: true}],
  linkDownload: {type: String},
});

module.exports = {
  schema: userSchema,
  model: mongoose.model('Movie', userSchema),
  registry: {
    urlTemplates: {
      "self": "http://127.0.0.1:3000/api/movies/{id}",
      "relationship": "http://127.0.0.1:3000/api/movies/{ownerId}/relationships/{path}"
    }
  },
};