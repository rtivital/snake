import oc from '../open-color';
import Canvas from '../Canvas';
import { TILE_SIZE } from '../configuration';

export default function playgroundRenderer({ ctx, width, height }: Canvas): void {
  ctx.fillStyle = oc.white;
  const playgroundSize = TILE_SIZE * 30;
  ctx.fillRect((width - playgroundSize) / 2, (height - playgroundSize) / 2, playgroundSize, playgroundSize);
}
