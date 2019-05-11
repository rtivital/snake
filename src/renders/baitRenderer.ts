import oc from '../open-color';
import Canvas from '../Canvas';
import store from '../store/store';
import { TILE_SIZE, PLAYGROUND_SIZE } from '../configuration';

export default function baitRenderer({ ctx, width, height }: Canvas): void {
  const { bait } = store.getState();
  ctx.fillStyle = oc.red[5];

  const playgroundSize = TILE_SIZE * PLAYGROUND_SIZE;
  const playbroundBeginX = (width - playgroundSize) / 2;
  const playbroundBeginY = (height - playgroundSize) / 2;

  ctx.fillRect(playbroundBeginX + TILE_SIZE * bait.x, playbroundBeginY + TILE_SIZE * bait.y, TILE_SIZE, TILE_SIZE);
}
