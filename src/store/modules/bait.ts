import random from 'lodash.random';
import { SnakeState, initialState as snakeInitialState } from './snake';
import { ResetAction, RESET } from './game';
import { PLAYGROUND_SIZE } from '../../configuration';

export const GENERATE_BAIT = 'bait/GENERATE_BAIT';

export type BaitState = Readonly<{ x: number; y: number }>;

interface GenerateBaitAction {
  type: typeof GENERATE_BAIT;
  payload: SnakeState;
}

export const generateBait = (snake: SnakeState): GenerateBaitAction => ({ type: GENERATE_BAIT, payload: snake });

export type BaitActions = GenerateBaitAction | ResetAction;

function getRandomCoordinates(snake: SnakeState): BaitState {
  const x = random(0, PLAYGROUND_SIZE - 1);
  const y = random(0, PLAYGROUND_SIZE - 1);

  for (let i = 0; i < snake.length; i += 1) {
    if (x === snake[i].x && y === snake[i].y) {
      return getRandomCoordinates(snake);
    }
  }

  return { x, y };
}

export default function baitReducer(
  state: BaitState = getRandomCoordinates(snakeInitialState),
  action: BaitActions
): BaitState {
  switch (action.type) {
    case RESET:
      return getRandomCoordinates(snakeInitialState);

    case GENERATE_BAIT:
      return getRandomCoordinates(action.payload);

    default:
      return state;
  }
}
