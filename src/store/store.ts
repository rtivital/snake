import { createStore, combineReducers } from 'redux';
import getReduxDevTools from './getReduxDevTools';
import score from './modules/score';
import snake from './modules/snake';
import bait from './modules/bait';
import direction from './modules/direction';
import game from './modules/game';

export default createStore(combineReducers({ score, snake, bait, direction, game }), undefined, getReduxDevTools());
