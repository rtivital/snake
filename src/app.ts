import Canvas from './Canvas';
import backgroundRenderer from './renders/backgroundRenderer';
import scoreRenderer from './renders/scoreRenderer';
import playgroundRenderer from './renders/playgroundRenderer';
import store from './store/store';

const canvas = new Canvas({
  selector: '#app',
  renderers: [backgroundRenderer, scoreRenderer, playgroundRenderer],
});

store.subscribe(canvas.render);
canvas.render();
