import Canvas from '../Canvas';
import { TILE_SIZE, PLAYGROUND_SIZE, COLOR_RED } from '../configuration';
import store from '../store/store';

export default function gameOverRenderer({ ctx, width, height }: Canvas): void {
  if (store.getState().game.gameOver) {
    ctx.fillStyle = COLOR_RED;

    const playgroundSize = TILE_SIZE * PLAYGROUND_SIZE;
    const playbroundBeginX = (width - playgroundSize) / 2;
    const playbroundBeginY = (height - playgroundSize) / 2;

    ctx.fillRect(
      playbroundBeginX - TILE_SIZE,
      playbroundBeginY - TILE_SIZE,
      playgroundSize + TILE_SIZE * 2,
      playgroundSize + TILE_SIZE * 2
    );
  }
}
