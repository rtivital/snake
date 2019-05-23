import Canvas from '../Canvas';
import { TILE_SIZE, COLOR_RED, COLOR_WHITE } from '../configuration';
import getPlaygrounPosition from '../utils/getPlaygroundPosition';
import store from '../store/store';

export default function gameOverRenderer(canvas: Canvas): void {
  if (store.getState().game.gameOver) {
    const { ctx } = canvas;
    const { playgroundSize, playbroundBeginX, playbroundBeginY } = getPlaygrounPosition(canvas);

    ctx.fillStyle = COLOR_RED;
    ctx.globalAlpha = 0.8;
    ctx.fillRect(
      playbroundBeginX - TILE_SIZE,
      playbroundBeginY - TILE_SIZE,
      playgroundSize + TILE_SIZE * 2,
      playgroundSize + TILE_SIZE * 2
    );

    ctx.fillStyle = COLOR_WHITE;
    ctx.textAlign = 'center';
    ctx.globalAlpha = 1;
    ctx.font = "40px 'Roboto', sans-serif";
    ctx.fillText('Game over', playbroundBeginX - TILE_SIZE + playgroundSize / 2, playbroundBeginY + playgroundSize / 2);
    ctx.font = "20px 'Roboto', sans-serif";
    ctx.fillText(
      'Press space to restart',
      playbroundBeginX - TILE_SIZE + playgroundSize / 2,
      playbroundBeginY + playgroundSize - 30
    );
  }
}
