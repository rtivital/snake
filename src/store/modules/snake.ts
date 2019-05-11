import { PLAYGROUND_SIZE, INITIAL_SNAKE_SIZE } from '../../configuration';
import { DirectionState } from './direction';

export type SnakeState = Readonly<{ x: number; y: number; head: boolean }>[];

export const MOVE = 'snake/MOVE';

interface MoveAction {
  type: typeof MOVE;
  payload: DirectionState;
}

export type SnakeActions = MoveAction;

const initialState: SnakeState = Array(INITIAL_SNAKE_SIZE)
  .fill(0)
  .map((_, index) => ({
    x: Math.round(PLAYGROUND_SIZE / 2) + index,
    y: Math.round(PLAYGROUND_SIZE / 2) + index,
    head: index === INITIAL_SNAKE_SIZE - 1,
  }));

export default function snakeReducer(state: SnakeState = initialState, action: SnakeActions): SnakeState {
  switch (action.type) {
    case MOVE:
      return state.map((part) => ({
        ...part,
        x: action.payload === 'left' ? part.x - 1 : action.payload === 'right' ? part.x + 1 : part.x,
        y: action.payload === 'down' ? part.x - 1 : action.payload === 'up' ? part.x + 1 : part.x,
      }));

    default:
      return state;
  }
}
