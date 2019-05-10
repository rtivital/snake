import oc from '../open-color';
import Canvas from '../Canvas';

export default function backgroundRenderer({ ctx, element }: Canvas): void {
  ctx.fillStyle = oc.gray[9];
  ctx.fillRect(0, 0, element.width, element.height);
}
