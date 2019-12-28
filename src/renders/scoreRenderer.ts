import Canvas from '../Canvas';
import store from '../store/store';
import getPlaygroundPosition from '../utils/getPlaygroundPosition';
import { COLOR_WHITE } from '../configuration';

export default function scoreRenderer(canvas: Canvas) {
  const { ctx } = canvas;
  const { playbroundBeginX, playbroundBeginY } = getPlaygroundPosition(canvas);

  ctx.textAlign = 'left';
  ctx.font = "20px 'Roboto', sans-serif";
  ctx.fillStyle = COLOR_WHITE;
  ctx.fillText(`Score: ${store.getState().game.score}`, playbroundBeginX - canvas.tileSize, playbroundBeginY - 25);
}
