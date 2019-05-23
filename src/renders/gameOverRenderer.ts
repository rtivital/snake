import Canvas from '../Canvas';
import { TILE_SIZE, COLOR_RED } from '../configuration';
import getPlaygrounPosition from '../utils/getPlaygroundPosition';
import store from '../store/store';

export default function gameOverRenderer(canvas: Canvas): void {
  if (store.getState().game.gameOver) {
    const { ctx } = canvas;
    ctx.fillStyle = COLOR_RED;
    const { playgroundSize, playbroundBeginX, playbroundBeginY } = getPlaygrounPosition(canvas);

    ctx.fillRect(
      playbroundBeginX - TILE_SIZE,
      playbroundBeginY - TILE_SIZE,
      playgroundSize + TILE_SIZE * 2,
      playgroundSize + TILE_SIZE * 2
    );
  }
}
