import { Snake } from '../types';
import { PLAYGROUND_SIZE } from '../configuration';

export default function hasCollisions(snake: Snake) {
  const head = snake[0];

  if (head.x < 0 || head.x > PLAYGROUND_SIZE - 1 || head.y < 0 || head.y > PLAYGROUND_SIZE - 1) {
    return true;
  }

  for (let i = snake.length - 1; i > 0; i -= 1) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      return true;
    }
  }

  return false;
}
