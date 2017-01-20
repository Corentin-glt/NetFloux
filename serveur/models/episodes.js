const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const userSchema = Schema({
  title: {type: String, required: true},
  dateAdd: {type: Date, default: Date.now},
  addBy: {type: ObjectId, ref: 'User'},
  dateProduction: {type: Date, required: true},
  actors: [{type: String, required: true}],
  linkDownload: {type: String},
  numberSeason: {type: Number},
  numberEpisode: {type: Number},
  tvshow: {type: ObjectId, ref: 'Tvshow'}
});

module.exports = {
  schema: userSchema,
  model: mongoose.model('Episode', userSchema),
  registry: {
    urlTemplates: {
      "self": "http://127.0.0.1:3000/api/episodes/{id}",
      "relationship": "http://127.0.0.1:3000/api/episodes/{ownerId}/relationships/{path}"
    }
  },
};