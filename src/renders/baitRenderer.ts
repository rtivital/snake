import Canvas from '../Canvas';
import store from '../store/store';
import { TILE_SIZE, COLOR_RED } from '../configuration';
import getPlaygroundPosition from '../utils/getPlaygroundPosition';

export default function baitRenderer(canvas: Canvas): void {
  const { bait } = store.getState();
  const { ctx } = canvas;
  const { playbroundBeginX, playbroundBeginY } = getPlaygroundPosition(canvas);

  ctx.fillStyle = COLOR_RED;
  ctx.fillRect(playbroundBeginX + TILE_SIZE * bait.x, playbroundBeginY + TILE_SIZE * bait.y, TILE_SIZE, TILE_SIZE);
}
