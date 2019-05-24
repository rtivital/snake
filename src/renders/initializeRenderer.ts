import Canvas from '../Canvas';
import { COLOR_GREEN } from '../configuration';
import createOverlayRenderer from '../utils/createOverlayRenderer';
import store from '../store/store';

const renderer = createOverlayRenderer({
  background: COLOR_GREEN,
  mainMessage: 'Snake',
  secondaryMessage: 'Press space to start',
});

export default function initializeRenderer(canvas: Canvas): void {
  if (!store.getState().game.initialized) {
    renderer(canvas);
  }
}
