/**
 * Created by corentin on 21/01/17.
 */
import {createStore} from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState);
}