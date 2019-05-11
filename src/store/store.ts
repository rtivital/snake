import { createStore, combineReducers } from 'redux';
import getReduxDevTools from './getReduxDevTools';
import score from './modules/score';

export default createStore(combineReducers({ score }), undefined, getReduxDevTools());
