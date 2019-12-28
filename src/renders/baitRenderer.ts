import Canvas from '../Canvas';
import store from '../store/store';
import { COLOR_RED } from '../configuration';
import getPlaygroundPosition from '../utils/getPlaygroundPosition';

export default function baitRenderer(canvas: Canvas) {
  const { bait } = store.getState();
  const { ctx } = canvas;
  const { playbroundBeginX, playbroundBeginY } = getPlaygroundPosition(canvas);

  ctx.fillStyle = COLOR_RED;
  ctx.beginPath();
  ctx.arc(
    playbroundBeginX + (canvas.tileSize * bait.x + canvas.tileSize / 2),
    playbroundBeginY + (canvas.tileSize * bait.y + canvas.tileSize / 2),
    canvas.tileSize / 2,
    0,
    2 * Math.PI,
    false
  );
  ctx.fill();
}
