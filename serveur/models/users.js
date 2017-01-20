const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const userSchema = Schema({
  pseudo: {type: String, required: true},
  password: {type: String, required: true},
  token: {type: String},
  movies: [{type: ObjectId, ref: 'Movie'}],
  tvshows: [{type: ObjectId, ref: 'Tvshow'}],
  episodes: [{type: ObjectId, ref: 'Episode'}]
});
const model = mongoose.model('User', userSchema);

module.exports = {
  schema: userSchema,
  model: mongoose.model('User', userSchema),
  registry: {
    urlTemplates: {
      "self": "http://127.0.0.1:3000/api/users/{id}",
      "relationship": "http://127.0.0.1:3000/api/users/{ownerId}/relationships/{path}"
    }
  },
  actions: {
    login(email, password, token) {
      return model.findOneAndUpdate({email, password}, {token}).exec();
    },
    logout(token) {
      return model.findOneAndUpdate({token}, {token: undefined}).exec();
    }
  }
};