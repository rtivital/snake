import Canvas from './Canvas';
import backgroundRenderer from './renders/backgroundRenderer';
import scoreRenderer from './renders/scoreRenderer';
import playgroundRenderer from './renders/playgroundRenderer';
import snakeRenderer from './renders/snakeRenderer';
import baitRenderer from './renders/baitRenderer';
import gameOverRenderer from './renders/gameOverRenderer';
import initializeRenderer from './renders/initializeRenderer';
import store from './store/store';
import Game from './Game';

const canvas = new Canvas({
  selector: '#app',
  renderers: [
    backgroundRenderer,
    scoreRenderer,
    playgroundRenderer,
    baitRenderer,
    snakeRenderer,
    gameOverRenderer,
    initializeRenderer,
  ],
});

store.subscribe(canvas.render);
canvas.render();

new Game().init();
