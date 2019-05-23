import { TILE_SIZE, PLAYGROUND_SIZE } from '../configuration';
import Cavas from '../Canvas';

export default function getPlaygroundPosition({ width, height }: Cavas) {
  const playgroundSize = TILE_SIZE * PLAYGROUND_SIZE;
  const playbroundBeginX = (width - playgroundSize) / 2;
  const playbroundBeginY = (height - playgroundSize) / 2;

  return {
    playgroundSize,
    playbroundBeginX,
    playbroundBeginY,
  };
}
