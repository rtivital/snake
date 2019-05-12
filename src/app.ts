import Canvas from './Canvas';
import backgroundRenderer from './renders/backgroundRenderer';
import scoreRenderer from './renders/scoreRenderer';
import playgroundRenderer from './renders/playgroundRenderer';
import snakeRenderer from './renders/snakeRenderer';
import baitRenderer from './renders/baitRenderer';
import store from './store/store';
import { setDirection } from './store/modules/direction';
import { moveSnake, growSnake } from './store/modules/snake';
import { GAME_SPEED, PLAYGROUND_SIZE } from './configuration';
import { gameOver, setGameInterval } from './store/modules/game';
import { incrementScore } from './store/modules/score';
import audio from './audio/audio';
import { generateBait } from './store/modules/bait';

const canvas = new Canvas({
  selector: '#app',
  renderers: [backgroundRenderer, scoreRenderer, playgroundRenderer, baitRenderer, snakeRenderer],
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

function hasCollisions(snake: { x: number; y: number }[]): boolean {
  const head = snake[0];

  if (head.x < 0 || head.x > PLAYGROUND_SIZE - 1 || head.y < 0 || head.y > PLAYGROUND_SIZE - 1) {
    return true;
  }

  for (let i = snake.length - 1; i > 0; i -= 1) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      return true;
    }
  }

  return false;
}

function game(): void {
  const {
    direction,
    snake,
    bait,
    game: { interval },
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
