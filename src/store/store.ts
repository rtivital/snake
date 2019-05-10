import { createStore, combineReducers } from 'redux';
import getReduxDevTools from './getReduxDevTools';

export default createStore(combineReducers({}), undefined, getReduxDevTools());
