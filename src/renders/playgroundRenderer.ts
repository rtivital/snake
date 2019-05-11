import oc from '../open-color';
import Canvas from '../Canvas';
import { TILE_SIZE, PLAYGROUND_SIZE, PLAYGROUND_DOT_SIZE } from '../configuration';

export default function playgroundRenderer({ ctx, width, height }: Canvas): void {
  ctx.fillStyle = oc.white;
  const playgroundSize = TILE_SIZE * PLAYGROUND_SIZE;
  const playbroundBeginX = (width - playgroundSize) / 2;
  const playbroundBeginY = (height - playgroundSize) / 2;

  ctx.fillRect(playbroundBeginX, playbroundBeginY, playgroundSize, playgroundSize);

  ctx.fillStyle = oc.indigo[1];

  for (let x = 0; x < PLAYGROUND_SIZE; x += 1) {
    for (let y = 0; y < PLAYGROUND_SIZE; y += 1) {
      ctx.fillRect(
        playbroundBeginX + TILE_SIZE * x + (TILE_SIZE - PLAYGROUND_DOT_SIZE) / 2,
        playbroundBeginY + TILE_SIZE * y + (TILE_SIZE - PLAYGROUND_DOT_SIZE) / 2,
        PLAYGROUND_DOT_SIZE,
        PLAYGROUND_DOT_SIZE
      );
    }
  }
}
