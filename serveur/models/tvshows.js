/**
 * Created by corentin on 20/01/17.
 */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const userSchema = Schema({
  title: {type: String, required: true},
  dateAdd: {type: Date, default: Date.now},
  addBy: {type: ObjectId, ref: 'User'},
  dateProduction: {type: Date, required: true},
  category: [{type: String, required: true}],
  actors: [{type: String, required: true}],
  linkDownload: {type: String},
  numberSeason: {type: Number},
  numberEpisode: {type: Number},
  episodes: [{type: ObjectId, ref: 'Episode'}]
});

module.exports = {
  schema: userSchema,
  model: mongoose.model('Tvshow', userSchema),
  registry: {
    urlTemplates: {
      "self": "http://127.0.0.1:3000/api/tvshows/{id}",
      "relationship": "http://127.0.0.1:3000/api/tvshows/{ownerId}/relationships/{path}"
    }
  },
};