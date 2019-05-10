import Canvas from './Canvas';
import backgroundRenderer from './renders/backgroundRenderer';
import store from './store/store';

const canvas = new Canvas({
  selector: '#app',
  renderers: [backgroundRenderer],
});

store.subscribe(canvas.render);
canvas.render();
