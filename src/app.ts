import Canvas from './Canvas';
import backgroundRenderer from './renders/backgroundRenderer';
import scoreRenderer from './renders/scoreRenderer';
import playgroundRenderer from './renders/playgroundRenderer';
import snakeRenderer from './renders/snakeRenderer';
import baitRenderer from './renders/baitRenderer';
import gameOverRenderer from './renders/gameOverRenderer';
import store from './store/store';
import { moveSnake, growSnake } from './store/modules/snake';
import { GAME_SPEED } from './configuration';
import { gameOver, setGameInterval, incrementScore, setDirection } from './store/modules/game';
import audio from './audio/audio';
import hasCollisions from './utils/hasCollisions';
import { generateBait } from './store/modules/bait';

const canvas = new Canvas({
  selector: '#app',
  renderers: [backgroundRenderer, scoreRenderer, playgroundRenderer, baitRenderer, snakeRenderer, gameOverRenderer],
});

store.subscribe(canvas.render);
canvas.render();

window.addEventListener('keydown', (event) => {
  const { key } = event;
  if (key === 'ArrowUp' || key === 'w') {
    store.dispatch(setDirection('up'));
  }

  if (key === 'ArrowDown' || key === 's') {
    store.dispatch(setDirection('down'));
  }

  if (key === 'ArrowRight' || key === 'd') {
    store.dispatch(setDirection('right'));
  }

  if (key === 'ArrowLeft' || key === 'a') {
    store.dispatch(setDirection('left'));
  }
});

function game(): void {
  const {
    snake,
    bait,
    game: { interval, direction },
  } = store.getState();

  if (hasCollisions(snake)) {
    store.dispatch(gameOver());
    window.clearInterval(interval);
    audio.gameOver.play();
  } else {
    const head = snake[0];
    if (head.x === bait.x && head.y === bait.y) {
      store.dispatch(growSnake());
      store.dispatch(generateBait(snake));
      store.dispatch(incrementScore());
      audio.bait.play();
    }
    store.dispatch(moveSnake(direction));
  }
}

store.dispatch(setGameInterval(window.setInterval(game, GAME_SPEED)));
