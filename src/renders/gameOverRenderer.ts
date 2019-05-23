import oc from '../open-color';
import Canvas from '../Canvas';
import { TILE_SIZE, PLAYGROUND_SIZE, PLAYGROUND_WALL_SIZE } from '../configuration';
import store from '../store/store';

export default function gameOverRenderer({ ctx, width, height }: Canvas): void {
  if (store.getState().game.gameOver) {
    ctx.fillStyle = oc.red[5];

    const playgroundSize = TILE_SIZE * PLAYGROUND_SIZE;
    const playbroundBeginX = (width - playgroundSize) / 2;
    const playbroundBeginY = (height - playgroundSize) / 2;

    ctx.fillRect(
      playbroundBeginX - PLAYGROUND_WALL_SIZE,
      playbroundBeginY - PLAYGROUND_WALL_SIZE,
      playgroundSize + PLAYGROUND_WALL_SIZE * 2,
      playgroundSize + PLAYGROUND_WALL_SIZE * 2
    );
  }
}
