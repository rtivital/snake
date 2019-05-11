import { createStore, combineReducers } from 'redux';
import getReduxDevTools from './getReduxDevTools';
import score from './modules/score';
import snake from './modules/snake';

export default createStore(combineReducers({ score, snake }), undefined, getReduxDevTools());
