/**
 * Created by corentin on 25/01/17.
 */
import Promise from 'bluebird';
import {Serializer, Deserializer} from 'jsonapi-serializer';

const _Deserializer = new Deserializer({
  keyForAttribute: 'camelCase'
});
_Deserializer.deserialize = Promise.promisify(_Deserializer.deserialize);

export const movieSerializer = {
  serialize(data) {
    return new Serializer('movies', {
      keyForAttribute: 'camelCase',
      attributes: [
        'title',
        'addBy',
        'dateProduction',
        'actors',
        'category',
        'linkDownload'
      ],
      typeForAttribute: function (attribute, data) {
        // sometimes this returns undefined
        return data.customType;
      },
      addBy: {
        ref: 'id',
        included: false
      }
    }).serialize(data);
  },
  deserialize(data) {
    return _Deserializer
      .deserialize(data);
  }
};