export const SET_GAME_INTERVAL = 'game/SET_GAME_INTERVAL';
export const GAME_OVER = 'game/GAME_OVER';

export type GameState = Readonly<{ interval: number; gameOver: boolean }>;

interface SetGameIntervalAction {
  type: typeof SET_GAME_INTERVAL;
  payload: number;
}

interface GameOverAction {
  type: typeof GAME_OVER;
}

export const setGameInterval = (interval: number): SetGameIntervalAction => ({
  type: SET_GAME_INTERVAL,
  payload: interval,
});

export const gameOver = (): GameOverAction => ({ type: GAME_OVER });

export type GameActions = SetGameIntervalAction | GameOverAction;

export default function gameReducer(state: GameState = { interval: 0, gameOver: false }, action: GameActions) {
  switch (action.type) {
    case GAME_OVER:
      return { ...state, gameOver: true };

    case SET_GAME_INTERVAL:
      return { ...state, interval: action.payload };

    default:
      return state;
  }
}
