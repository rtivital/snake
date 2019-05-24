import { Direction } from '../../types';
import isOpositeDirection from '../../utils/isOpositeDirection';

export const INITIALIZE_GAME = 'game/INITIALIZE_GAME';
export const GAME_OVER = 'game/GAME_OVER';
export const RESET = 'game/RESET';
export const SET_DIRECTION = 'game/SET_DIRECTION';
export const INCREMENT_SCORE = 'game/INCREMENT_SCORE';

type GameState = Readonly<{
  gameOver: boolean;
  direction: Direction;
  score: number;
  initialized: boolean;
}>;

export const initialState: GameState = { gameOver: false, direction: 'up', score: 0, initialized: false };

export interface GameOverAction {
  type: typeof GAME_OVER;
}

export interface ResetAction {
  type: typeof RESET;
}

export interface SetDirectionAction {
  type: typeof SET_DIRECTION;
  payload: Direction;
}

export interface IncrementScoreAction {
  type: typeof INCREMENT_SCORE;
}

export interface InitializeGameAction {
  type: typeof INITIALIZE_GAME;
}

export const setDirection = (direction: Direction): SetDirectionAction => ({
  type: SET_DIRECTION,
  payload: direction,
});

export const initializeGame = (): InitializeGameAction => ({ type: INITIALIZE_GAME });
export const reset = (): ResetAction => ({ type: RESET });
export const gameOver = (): GameOverAction => ({ type: GAME_OVER });
export const incrementScore = (): IncrementScoreAction => ({ type: INCREMENT_SCORE });

type GameActions = GameOverAction | ResetAction | SetDirectionAction | IncrementScoreAction | InitializeGameAction;

export default function gameReducer(state: GameState = initialState, action: GameActions): GameState {
  switch (action.type) {
    case INITIALIZE_GAME:
      return { ...state, initialized: true };

    case RESET:
      return { ...initialState, initialized: true };

    case GAME_OVER:
      return { ...state, gameOver: true };

    case SET_DIRECTION:
      return isOpositeDirection(state.direction, action.payload) ? state : { ...state, direction: action.payload };

    case INCREMENT_SCORE:
      return { ...state, score: state.score + 1 };

    default:
      return state;
  }
}
