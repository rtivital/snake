import oc from '../open-color';
import Canvas from '../Canvas';
import { TILE_SIZE, PLAYGROUND_SIZE, PLAYGROUND_DOT_SIZE, PLAYGROUND_WALL_SIZE } from '../configuration';

export default function playgroundRenderer({ ctx, width, height }: Canvas): void {
  ctx.fillStyle = oc.white;
  ctx.strokeStyle = oc.lime[5];
  ctx.lineWidth = PLAYGROUND_WALL_SIZE;

  const playgroundSize = TILE_SIZE * PLAYGROUND_SIZE;
  const playbroundBeginX = (width - playgroundSize) / 2;
  const playbroundBeginY = (height - playgroundSize) / 2;

  ctx.fillRect(playbroundBeginX, playbroundBeginY, playgroundSize, playgroundSize);
  ctx.strokeRect(
    playbroundBeginX - PLAYGROUND_WALL_SIZE / 2,
    playbroundBeginY - PLAYGROUND_WALL_SIZE / 2,
    playgroundSize + PLAYGROUND_WALL_SIZE,
    playgroundSize + PLAYGROUND_WALL_SIZE
  );

  ctx.fillStyle = oc.indigo[0];

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
