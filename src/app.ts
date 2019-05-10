import oc from './open-color';

const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('app');
const ctx: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext('2d');

canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

function init() {
  ctx.fillStyle = oc.gray[9];
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

window.addEventListener('resize', () => {
  canvas.width = document.body.clientWidth;
  canvas.height = document.body.clientHeight;
  init();
});

init();
