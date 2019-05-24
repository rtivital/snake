import Canvas from '../Canvas';
import { TILE_SIZE, COLOR_GREEN, COLOR_WHITE } from '../configuration';
import getPlaygrounPosition from '../utils/getPlaygroundPosition';
import store from '../store/store';

export default function initializeRenderer(canvas: Canvas): void {
  if (!store.getState().game.initialized) {
    const { ctx } = canvas;
    const { playgroundSize, playbroundBeginX, playbroundBeginY } = getPlaygrounPosition(canvas);

    ctx.fillStyle = COLOR_GREEN;
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
    ctx.fillText('Snake', playbroundBeginX - TILE_SIZE + playgroundSize / 2, playbroundBeginY + playgroundSize / 2);
    ctx.font = "20px 'Roboto', sans-serif";
    ctx.fillText(
      'Press space to start',
      playbroundBeginX - TILE_SIZE + playgroundSize / 2,
      playbroundBeginY + playgroundSize - 30
    );
    ctx.restore();
  }
}
