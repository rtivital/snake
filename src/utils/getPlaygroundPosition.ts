import { PLAYGROUND_SIZE } from '../configuration';
import Cavas from '../Canvas';

export default function getPlaygroundPosition(canvas: Cavas) {
  const playgroundSize = canvas.tileSize * PLAYGROUND_SIZE;
  const playbroundBeginX = (canvas.width - playgroundSize) / 2;
  const playbroundBeginY = (canvas.height - playgroundSize) / 2;

  return {
    playgroundSize,
    playbroundBeginX,
    playbroundBeginY,
  };
}
