import oc from '../open-color';
import Canvas from '../Canvas';
import { TILE_SIZE } from '../configuration';

export default function playgroundRenderer({ ctx, element }: Canvas): void {
  ctx.fillStyle = oc.white;
  const playgroundSize = TILE_SIZE * 40;
  ctx.fillRect(
    (element.width - playgroundSize * window.devicePixelRatio) / 2 / window.devicePixelRatio,
    (element.height - playgroundSize * window.devicePixelRatio) / 2 / window.devicePixelRatio,
    playgroundSize,
    playgroundSize
  );
}
