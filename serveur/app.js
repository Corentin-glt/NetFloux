const app = require('express')();
const API = require('json-api');
const mongoose = require('mongoose');

const APIError = API.types.Error;
const morgan = require('morgan');
const bodyParser = require('body-parser');
const config = require('./config');
const router = require('./routes/route-authenticate');

mongoose.connect(config.database);

const models = {
  User: require('./models/users').model,
  Movie: require('./models/movies').model,
  Tvshow: require('./models/tvshows').model,
  Episode: require('./models/episodes').model
};

const registry_templates = {
  users: require('./models/users').registry,
  movies: require('./models/movies').registry,
  tvshows: require('./models/tvshows').registry,
  episodes: require('./models/episodes').registry,
};

const adapter = new API.dbAdapters.Mongoose(models);
const registry = new API.ResourceTypeRegistry(registry_templates, {dbAdapter: adapter});

const docs = new API.controllers.Documentation(registry, {name: 'NetFloux API'});
const controller = new API.controllers.API(registry);
const front = new API.httpStrategies.Express(controller, docs);

const apiReqHandler = front.apiRequest.bind(front);

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Cache-Control, Authorization');
  res.header('Access-Control-Allow-Methods',
    'POST, GET, PATCH, DELETE, OPTIONS, PUT');
  next();
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

const db = [
  'users',
  'movies',
  'tvshows',
  'episodes'
];

app.options('*', function (req, res) {
  res.status(200).send();
});

app.use('/', router);

app.get('/api', front.docsRequest.bind(front));

app.route(`/api/:type(${db.join('|')})`).get(apiReqHandler).post(apiReqHandler)
  .patch(apiReqHandler);

app.route(`/api/:type(${db.join('|')})/:id`).get(apiReqHandler).patch(apiReqHandler)
  .delete(apiReqHandler);

app.route(`/api/:type(${db.join('|')})/:id/relationships/:relationship`)
  .get(apiReqHandler).post(apiReqHandler).patch(apiReqHandler)
  .delete(apiReqHandler);

app.use(function (req, res, next) {
  front.sendError(new APIError(404, undefined, 'Not Found'), req, res);
});

app.listen(3000);
console.log('Server is connected at http://localhost:3000/api');

module.exports = app;