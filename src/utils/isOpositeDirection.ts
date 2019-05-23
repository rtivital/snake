import { Direction } from '../types';

const OPOSITE_DIRECTIONS = {
  up: 'down',
  down: 'up',
  left: 'right',
  right: 'left',
};

export default function isOpositeDirection(currentDirection: Direction, nextDirection: Direction): boolean {
  return OPOSITE_DIRECTIONS[currentDirection] === nextDirection;
}
