import Canvas from '../Canvas';
import getPlaygroundPosition from '../utils/getPlaygroundPosition';
import { PLAYGROUND_SIZE, COLOR_LIGHT_INDIGO, COLOR_WHITE, COLOR_LIME } from '../configuration';

export default function playgroundRenderer(canvas: Canvas) {
  const { ctx } = canvas;
  const { playgroundSize, playbroundBeginX, playbroundBeginY } = getPlaygroundPosition(canvas);

  ctx.fillStyle = COLOR_WHITE;
  ctx.strokeStyle = COLOR_LIME;
  ctx.lineWidth = canvas.tileSize;

  ctx.fillRect(playbroundBeginX, playbroundBeginY, playgroundSize, playgroundSize);
  ctx.strokeRect(
    playbroundBeginX - canvas.tileSize / 2,
    playbroundBeginY - canvas.tileSize / 2,
    playgroundSize + canvas.tileSize,
    playgroundSize + canvas.tileSize
  );

  ctx.fillStyle = COLOR_LIGHT_INDIGO;

  const dotSize = canvas.tileSize / 5;

  for (let x = 0; x < PLAYGROUND_SIZE; x += 1) {
    for (let y = 0; y < PLAYGROUND_SIZE; y += 1) {
      ctx.fillRect(
        playbroundBeginX + canvas.tileSize * x + (canvas.tileSize - dotSize) / 2,
        playbroundBeginY + canvas.tileSize * y + (canvas.tileSize - dotSize) / 2,
        dotSize,
        dotSize
      );
    }
  }
}
