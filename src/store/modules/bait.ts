import random from 'lodash.random';
import { initialState as snakeInitialState } from './snake';
import { ResetAction, RESET } from './game';
import { Snake, Coordinate } from '../../types';
import { PLAYGROUND_SIZE } from '../../configuration';

export const GENERATE_BAIT = 'bait/GENERATE_BAIT';

interface GenerateBaitAction {
  type: typeof GENERATE_BAIT;
  payload: Snake;
}

export const generateBait = (snake: Snake): GenerateBaitAction => ({ type: GENERATE_BAIT, payload: snake });

function getRandomCoordinates(snake: Snake): Coordinate {
  const x = random(0, PLAYGROUND_SIZE - 1);
  const y = random(0, PLAYGROUND_SIZE - 1);

  for (let i = 0; i < snake.length; i += 1) {
    if (x === snake[i].x && y === snake[i].y) {
      return getRandomCoordinates(snake);
    }
  }

  return { x, y };
}

type BaitActions = GenerateBaitAction | ResetAction;

export default function baitReducer(
  state: Coordinate = getRandomCoordinates(snakeInitialState),
  action: BaitActions
): Coordinate {
  switch (action.type) {
    case RESET:
      return getRandomCoordinates(snakeInitialState);

    case GENERATE_BAIT:
      return getRandomCoordinates(action.payload);

    default:
      return state;
  }
}
