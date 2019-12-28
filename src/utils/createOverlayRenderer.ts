import getPlaygroundPosition from './getPlaygroundPosition';
import { COLOR_WHITE } from '../configuration';
import Canvas from '../Canvas';

interface CreateOverlay {
  background: string;
  mainMessage: string;
  secondaryMessage: string;
}

export default function createOverlayRender({ background, mainMessage, secondaryMessage }: CreateOverlay) {
  return function overlayRenderer(canvas: Canvas) {
    const { ctx } = canvas;
    const { playgroundSize, playbroundBeginX, playbroundBeginY } = getPlaygroundPosition(canvas);

    ctx.fillStyle = background;
    ctx.globalAlpha = 0.8;
    ctx.fillRect(
      playbroundBeginX - canvas.tileSize,
      playbroundBeginY - canvas.tileSize,
      playgroundSize + canvas.tileSize * 2,
      playgroundSize + canvas.tileSize * 2
    );

    ctx.fillStyle = COLOR_WHITE;
    ctx.textAlign = 'center';
    ctx.globalAlpha = 1;
    ctx.font = "40px 'Roboto', sans-serif";
    ctx.fillText(
      mainMessage,
      playbroundBeginX - canvas.tileSize + playgroundSize / 2,
      playbroundBeginY + playgroundSize / 2
    );
    ctx.font = "20px 'Roboto', sans-serif";
    ctx.fillText(
      secondaryMessage,
      playbroundBeginX - canvas.tileSize + playgroundSize / 2,
      playbroundBeginY + playgroundSize - 30
    );
  };
}
