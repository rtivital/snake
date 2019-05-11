import { createStore, combineReducers } from 'redux';
import getReduxDevTools from './getReduxDevTools';
import score from './modules/score';
import snake from './modules/snake';
import direction from './modules/direction';
import game from './modules/game';

export default createStore(combineReducers({ score, snake, direction, game }), undefined, getReduxDevTools());
