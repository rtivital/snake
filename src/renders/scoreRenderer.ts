import oc from '../open-color';
import Canvas from '../Canvas';

export default function scoreRenderer({ ctx }: Canvas): void {
  ctx.font = "20px 'Roboto', monospase";
  ctx.fillStyle = oc.white;
  ctx.fillText('Score: ', 500, 500);
}
