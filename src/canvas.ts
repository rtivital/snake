import debounce from 'lodash.debounce';

type Renderer = (canvas: Canvas) => void;

interface CanvasInterface {
  selector: string;
  renderers: [Renderer];
}

export default class Canvas {
  public element: HTMLCanvasElement;
  public ctx: CanvasRenderingContext2D;
  private renderers: [Renderer];

  constructor({ selector, renderers }: CanvasInterface) {
    this.element = <HTMLCanvasElement>document.querySelector(selector);
    this.ctx = <CanvasRenderingContext2D> this.element.getContext('2d');
    this.renderers = renderers;

    this.fitToWindow();

    window.addEventListener('resize', debounce(this.fitToWindow, 500));
  }

  private fitToWindow = (): this => {
    this.element.width = window.innerWidth;
    this.element.height = window.innerHeight;
    return this;
  };

  public render = (): this => {
    this.renderers.forEach((renderer) => renderer(this));
    return this;
  };
}
