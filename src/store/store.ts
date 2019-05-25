import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import snake from './modules/snake';
import bait from './modules/bait';
import game from './modules/game';

export default createStore(combineReducers({ snake, bait, game }), undefined, devToolsEnhancer({}));
