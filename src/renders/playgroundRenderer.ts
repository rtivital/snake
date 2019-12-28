import Canvas from '../Canvas';
import getPlaygroundPosition from '../utils/getPlaygroundPosition';
import { TILE_SIZE, PLAYGROUND_SIZE, COLOR_LIGHT_INDIGO, COLOR_WHITE, COLOR_LIME } from '../configuration';

export default function playgroundRenderer(canvas: Canvas) {
  const { ctx } = canvas;
  const { playgroundSize, playbroundBeginX, playbroundBeginY } = getPlaygroundPosition(canvas);

  ctx.fillStyle = COLOR_WHITE;
  ctx.strokeStyle = COLOR_LIME;
  ctx.lineWidth = TILE_SIZE;

  ctx.fillRect(playbroundBeginX, playbroundBeginY, playgroundSize, playgroundSize);
  ctx.strokeRect(
    playbroundBeginX - TILE_SIZE / 2,
    playbroundBeginY - TILE_SIZE / 2,
    playgroundSize + TILE_SIZE,
    playgroundSize + TILE_SIZE
  );

  ctx.fillStyle = COLOR_LIGHT_INDIGO;

  const dotSize = TILE_SIZE / 5;

  for (let x = 0; x < PLAYGROUND_SIZE; x += 1) {
    for (let y = 0; y < PLAYGROUND_SIZE; y += 1) {
      ctx.fillRect(
        playbroundBeginX + TILE_SIZE * x + (TILE_SIZE - dotSize) / 2,
        playbroundBeginY + TILE_SIZE * y + (TILE_SIZE - dotSize) / 2,
        dotSize,
        dotSize
      );
    }
  }
}
