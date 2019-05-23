import oc from '../open-color';
import Canvas from '../Canvas';
import { TILE_SIZE, PLAYGROUND_SIZE } from '../configuration';
import store from '../store/store';

export default function gameOverRenderer({ ctx, width, height }: Canvas): void {
  if (store.getState().game.gameOver) {
    ctx.fillStyle = oc.red[5];

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
