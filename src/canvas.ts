import throttle from 'lodash.throttle';

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

    // do not render until it is really necessary
    this.fitToWindow({ render: false });

    // we need to render on resize to make sure we do not break anything
    window.addEventListener('resize', throttle(() => this.fitToWindow({ render: true }), 200));
  }

  public render = (): this => {
    this.renderers.forEach((renderer) => renderer(this));
    return this;
  };

  private fitToWindow = ({ render }: { render: boolean }): this => {
    this.element.width = window.innerWidth;
    this.element.height = window.innerHeight;
    render && this.render();
    return this;
  };
}
