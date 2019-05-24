import Canvas from '../Canvas';
import { COLOR_RED } from '../configuration';
import createOverlayRenderer from '../utils/createOverlayRenderer';
import store from '../store/store';

const renderer = createOverlayRenderer({
  background: COLOR_RED,
  mainMessage: 'Game over',
  secondaryMessage: 'Press space to restart',
});

export default function gameOverRenderer(canvas: Canvas): void {
  if (store.getState().game.gameOver) {
    renderer(canvas);
  }
}
