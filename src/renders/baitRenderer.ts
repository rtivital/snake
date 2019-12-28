import Canvas from '../Canvas';
import store from '../store/store';
import { COLOR_RED } from '../configuration';
import getPlaygroundPosition from '../utils/getPlaygroundPosition';

export default function baitRenderer(canvas: Canvas) {
  const { bait } = store.getState();
  const { ctx } = canvas;
  const { playbroundBeginX, playbroundBeginY } = getPlaygroundPosition(canvas);

  ctx.fillStyle = COLOR_RED;
  ctx.fillRect(
    playbroundBeginX + canvas.tileSize * bait.x,
    playbroundBeginY + canvas.tileSize * bait.y,
    canvas.tileSize,
    canvas.tileSize
  );
}
