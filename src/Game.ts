import throttle from 'lodash.throttle';
import { GAME_SPEED } from './configuration';
import store from './store/store';
import { setDirection, reset, gameOver, initializeGame, incrementScore } from './store/modules/game';
import { moveSnake, growSnake } from './store/modules/snake';
import { generateBait } from './store/modules/bait';
import hasCollisions from './utils/hasCollisions';
import audio from './audio/audio';

export default class Game {
  private interval = 0;

  private handleKeyDown = throttle((event: KeyboardEvent) => {
    const { which } = event;
    const { game } = store.getState();

    // prevent snake from changing direction during initialization and game over
    if (!game.gameOver && game.initialized) {
      (which === 87 || which === 38) && store.dispatch(setDirection('up'));
      (which === 83 || which === 40) && store.dispatch(setDirection('down'));
      (which === 68 || which === 39) && store.dispatch(setDirection('right'));
      (which === 65 || which === 37) && store.dispatch(setDirection('left'));
    } else if (which === 32) {
      if (game.initialized) {
        this.restart();
      } else {
        this.start();
      }
    }
  }, GAME_SPEED);

  public init = () => {
    window.addEventListener('keydown', this.handleKeyDown);
  };

  private run = () => {
    const { game, snake, bait } = store.getState();

    if (hasCollisions(snake)) {
      store.dispatch(gameOver());
      window.clearInterval(this.interval);
      audio.gameOver.play();
    } else {
      const head = snake[0];

      if (head.x === bait.x && head.y === bait.y) {
        store.dispatch(growSnake());
        store.dispatch(generateBait(snake));
        store.dispatch(incrementScore());
        audio.bait.play();
      }

      store.dispatch(moveSnake(game.direction));
    }
  };

  private start = () => {
    store.dispatch(initializeGame());
    this.interval = window.setInterval(this.run, GAME_SPEED);
  };

  private restart = () => {
    store.dispatch(reset());
    this.start();
  };
}
