import isOpositeDirection, { Direction } from '../../utils/isOpositeDirection';

export const SET_GAME_INTERVAL = 'game/SET_GAME_INTERVAL';
export const GAME_OVER = 'game/GAME_OVER';
export const RESET = 'game/RESET';
export const SET_DIRECTION = 'game/SET_DIRECTION';
export const INCREMENT_SCORE = 'game/INCREMENT_SCORE';

type GameState = Readonly<{ interval: number; gameOver: boolean; direction: Direction; score: number }>;

export const initialState: GameState = { interval: 0, gameOver: false, direction: 'up', score: 0 };

export interface SetGameIntervalAction {
  type: typeof SET_GAME_INTERVAL;
  payload: number;
}

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

export const setGameInterval = (interval: number): SetGameIntervalAction => ({
  type: SET_GAME_INTERVAL,
  payload: interval,
});

export const setDirection = (direction: Direction): SetDirectionAction => ({
  type: SET_DIRECTION,
  payload: direction,
});

export const reset = (): ResetAction => ({ type: RESET });
export const gameOver = (): GameOverAction => ({ type: GAME_OVER });
export const incrementScore = (): IncrementScoreAction => ({ type: INCREMENT_SCORE });

type GameActions = SetGameIntervalAction | GameOverAction | ResetAction | SetDirectionAction | IncrementScoreAction;

export default function gameReducer(state: GameState = initialState, action: GameActions): GameState {
  switch (action.type) {
    case RESET:
      return initialState;

    case GAME_OVER:
      return { ...state, gameOver: true };

    case SET_GAME_INTERVAL:
      return { ...state, interval: action.payload };

    case SET_DIRECTION:
      return isOpositeDirection(state.direction, action.payload) ? state : { ...state, direction: action.payload };

    case INCREMENT_SCORE:
      return { ...state, score: state.score + 1 };

    default:
      return state;
  }
}
