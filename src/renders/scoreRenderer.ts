import oc from '../open-color';
import Canvas from '../Canvas';
import store from '../store/store';
import { TILE_SIZE, PLAYGROUND_SIZE } from '../configuration';

export default function scoreRenderer({ ctx, width, height }: Canvas): void {
  const playgroundSize = TILE_SIZE * PLAYGROUND_SIZE;
  const playbroundBeginX = (width - playgroundSize) / 2;
  const playbroundBeginY = (height - playgroundSize) / 2;

  ctx.font = "20px 'Roboto', monospase";
  ctx.fillStyle = oc.white;
  ctx.fillText(`Score: ${store.getState().game.score}`, playbroundBeginX - TILE_SIZE, playbroundBeginY - 25);
}
