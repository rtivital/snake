import oc from '../open-color';
import Canvas from '../Canvas';
import { TILE_SIZE, PLAYGROUND_SIZE } from '../configuration';
import store from '../store/store';

export default function snakeRenderer({ ctx, width, height }: Canvas): void {
  const { snake } = store.getState();
  const playgroundSize = TILE_SIZE * PLAYGROUND_SIZE;
  const playbroundBeginX = (width - playgroundSize) / 2;
  const playbroundBeginY = (height - playgroundSize) / 2;

  snake.forEach((part) => {
    ctx.fillStyle = part.head ? oc.indigo[5] : oc.teal[5];
    ctx.fillRect(playbroundBeginX + TILE_SIZE * part.x, playbroundBeginY + TILE_SIZE * part.y, TILE_SIZE, TILE_SIZE);
  });
}
