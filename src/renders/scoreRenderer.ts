import oc from '../open-color';
import Canvas from '../Canvas';
import store from '../store/store';

export default function scoreRenderer({ ctx }: Canvas): void {
  ctx.font = "20px 'Roboto', monospase";
  ctx.fillStyle = oc.white;
  ctx.fillText(`Score: ${store.getState().score}`, 500, 500);
}
