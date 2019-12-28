import { COLOR_DARK_GRAY } from '../configuration';
import Canvas from '../Canvas';

export default function backgroundRenderer({ ctx, width, height }: Canvas) {
  ctx.fillStyle = COLOR_DARK_GRAY;
  ctx.fillRect(0, 0, width, height);
}
