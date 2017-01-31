/**
 * Created by corentin on 27/01/17.
 */
import Promise from 'bluebird';
import {Serializer, Deserializer} from 'jsonapi-serializer';

const _Deserializer = new Deserializer({
  keyForAttribute: 'camelCase',
  users: {
    valueForRelationship: function(relationship) {
      return {
        id: relationship.id
      }
    }
  },
  episodes: [{
    valueForRelationship: function(relationship) {
      return {
        id: relationship.id
      }
    }
  }]
});
_Deserializer.deserialize = Promise.promisify(_Deserializer.deserialize);

export const tvshowSerializer = {
  serialize(data) {
    return new Serializer('tvshows', {
      keyForAttribute: 'camelCase',
      attributes: [
        'title',
        'users',
        'dateProduction',
        'actors',
        'image',
        'description',
        'category',
        'linkDownload',
        'numberSeason',
        'numberEpisode',
        'episodes'
      ],
      typeForAttribute: function (attribute, data) {
        // sometimes this returns undefined
        return data.customType;
      },
      users: {
        ref: 'id',
        included: false
      },
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