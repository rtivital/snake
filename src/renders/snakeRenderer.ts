import Canvas from '../Canvas';
import getPlaygroundPosition from '../utils/getPlaygroundPosition';
import { TILE_SIZE, COLOR_INDIGO, COLOR_GREEN } from '../configuration';
import store from '../store/store';

export default function snakeRenderer(canvas: Canvas) {
  const { snake } = store.getState();
  const { ctx } = canvas;
  const { playbroundBeginX, playbroundBeginY } = getPlaygroundPosition(canvas);

  snake.forEach((part, index) => {
    ctx.fillStyle = index === 0 ? COLOR_INDIGO : COLOR_GREEN;
    ctx.fillRect(playbroundBeginX + TILE_SIZE * part.x, playbroundBeginY + TILE_SIZE * part.y, TILE_SIZE, TILE_SIZE);
  });
}
