import random from 'lodash.random';
import { PLAYGROUND_SIZE } from '../configuration';
import { Coordinate } from '../types';

export default function getRandomCoordinates(exclude: Coordinate[]): Coordinate {
  const x = random(0, PLAYGROUND_SIZE - 1);
  const y = random(0, PLAYGROUND_SIZE - 1);

  for (let i = 0; i < exclude.length; i += 1) {
    if (x === exclude[i].x && y === exclude[i].y) {
      return getRandomCoordinates(exclude);
    }
  }

  return { x, y };
}
