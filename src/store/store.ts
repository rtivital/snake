import { createStore, combineReducers } from 'redux';
import getReduxDevTools from './getReduxDevTools';
import snake from './modules/snake';
import bait from './modules/bait';
import game from './modules/game';

export default createStore(combineReducers({ snake, bait, game }), undefined, getReduxDevTools());
