import oc from './open-color';
import Canvas from './Canvas';

const canvas = new Canvas({
  selector: '#app',
  renderers: [
    ({ ctx, element }) => {
      ctx.fillStyle = oc.gray[9];
      ctx.fillRect(0, 0, element.width, element.height);
    },
  ],
});

canvas.render();
