/**
 * Created by corentin on 23/01/17.
 */
import Promise from 'bluebird';
import {Serializer, Deserializer} from 'jsonapi-serializer';

const _Deserializer = new Deserializer({
  keyForAttribute: 'camelCase'
});
_Deserializer.deserialize = Promise.promisify(_Deserializer.deserialize);

export const userSerializer = {
  serialize(data) {
    return new Serializer('users', {
      keyForAttribute: 'camelCase',
      attributes: [
        'pseudo',
        'password',
        'token',
        'movies',
        'tvshows',
        'episodes'
      ],
      typeForAttribute: function (attribute, data) {
        // sometimes this returns undefined
        return data.customType;
      },
      movies: [{
        ref: 'id',
        included: false
      }],
      tvshows: [{
        ref: 'id',
        included: false
      }],
      episodes: [{
        ref: 'id',
        included: false
      }]
    }).serialize(data);
  },
  deserialize(data) {
    return _Deserializer
      .deserialize(data);
  }
};