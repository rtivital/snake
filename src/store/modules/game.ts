export const SET_GAME_INTERVAL = 'game/SET_GAME_INTERVAL';
export const GAME_OVER = 'game/GAME_OVER';
export const RESET = 'game/RESET';

export type GameState = Readonly<{ interval: number; gameOver: boolean }>;

export const initialState: GameState = { interval: 0, gameOver: false };

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

export const setGameInterval = (interval: number): SetGameIntervalAction => ({
  type: SET_GAME_INTERVAL,
  payload: interval,
});

export const reset = (): ResetAction => ({ type: RESET });

export const gameOver = (): GameOverAction => ({ type: GAME_OVER });

export type GameActions = SetGameIntervalAction | GameOverAction | ResetAction;

export default function gameReducer(state: GameState = initialState, action: GameActions): GameState {
  switch (action.type) {
    case RESET:
      return initialState;
    case GAME_OVER:
      return { ...state, gameOver: true };

    case SET_GAME_INTERVAL:
      return { ...state, interval: action.payload };

    default:
      return state;
  }
}
