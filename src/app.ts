import Canvas from './Canvas';
import backgroundRenderer from './renders/backgroundRenderer';

const canvas = new Canvas({
  selector: '#app',
  renderers: [backgroundRenderer],
});

canvas.render();
