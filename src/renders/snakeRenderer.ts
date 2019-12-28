import Canvas from '../Canvas';
import getPlaygroundPosition from '../utils/getPlaygroundPosition';
import { COLOR_INDIGO, COLOR_GREEN } from '../configuration';
import store from '../store/store';

export default function snakeRenderer(canvas: Canvas) {
  const { snake } = store.getState();
  const { ctx } = canvas;
  const { playbroundBeginX, playbroundBeginY } = getPlaygroundPosition(canvas);

  snake.forEach((part, index) => {
    ctx.fillStyle = index === 0 ? COLOR_INDIGO : COLOR_GREEN;
    ctx.fillRect(
      playbroundBeginX + canvas.tileSize * part.x,
      playbroundBeginY + canvas.tileSize * part.y,
      canvas.tileSize,
      canvas.tileSize
    );
  });
}
