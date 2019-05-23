import { PLAYGROUND_SIZE, INITIAL_SNAKE_SIZE } from '../../configuration';
import { Direction, Snake } from '../../types';
import { ResetAction, RESET } from './game';

export const MOVE = 'snake/MOVE';
export const GROW = 'snake/GROW';

export interface MoveAction {
  type: typeof MOVE;
  payload: Direction;
}

export interface GrowAction {
  type: typeof GROW;
}

export const moveSnake = (direction: Direction): MoveAction => ({ type: MOVE, payload: direction });
export const growSnake = (): GrowAction => ({ type: GROW });

export const initialState: Snake = Array(INITIAL_SNAKE_SIZE)
  .fill(0)
  .map((_, index) => ({
    x: Math.round(PLAYGROUND_SIZE / 2),
    y: Math.round(PLAYGROUND_SIZE / 2) + index,
    head: index === 0,
  }));

export type SnakeActions = MoveAction | GrowAction | ResetAction;

export default function snakeReducer(state: Snake = initialState, action: SnakeActions): Snake {
  switch (action.type) {
    case RESET:
      return initialState;

    case MOVE: {
      const oldHead = state[0];
      const snake = state.map((part) => ({ ...part, head: false }));
      snake.pop();

      snake.unshift({
        x: action.payload === 'left' ? oldHead.x - 1 : action.payload === 'right' ? oldHead.x + 1 : oldHead.x,
        y: action.payload === 'up' ? oldHead.y - 1 : action.payload === 'down' ? oldHead.y + 1 : oldHead.y,
        head: true,
      });

      return snake;
    }

    case GROW:
      return [...state, { ...state[state.length - 1] }];

    default:
      return state;
  }
}
