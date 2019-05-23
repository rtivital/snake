import Canvas from '../Canvas';
import { TILE_SIZE, PLAYGROUND_SIZE, COLOR_INDIGO, COLOR_GREEN } from '../configuration';
import store from '../store/store';

export default function snakeRenderer({ ctx, width, height }: Canvas): void {
  const { snake } = store.getState();
  const playgroundSize = TILE_SIZE * PLAYGROUND_SIZE;
  const playbroundBeginX = (width - playgroundSize) / 2;
  const playbroundBeginY = (height - playgroundSize) / 2;

  snake.forEach((part, index) => {
    ctx.fillStyle = index === 0 ? COLOR_INDIGO : COLOR_GREEN;
    ctx.fillRect(playbroundBeginX + TILE_SIZE * part.x, playbroundBeginY + TILE_SIZE * part.y, TILE_SIZE, TILE_SIZE);
  });
}
