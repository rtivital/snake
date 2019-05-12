import { ResetAction, RESET } from './game';

export type ScoreState = number;

const INCREMENT = 'score/INCREMENT';
const SET_SCORE = 'score/SET_SCORE';

interface IncrementScoreAction {
  type: typeof INCREMENT;
}

interface SetScoreAction {
  type: typeof SET_SCORE;
  payload: number;
}

export type ScoreActions = IncrementScoreAction | SetScoreAction | ResetAction;

export const incrementScore = (): IncrementScoreAction => ({ type: INCREMENT });
export const setScore = (score: number): SetScoreAction => ({ type: SET_SCORE, payload: score });

export default function scoreReducer(state: ScoreState = 0, action: ScoreActions): ScoreState {
  switch (action.type) {
    case RESET:
      return 0;

    case INCREMENT:
      return state + 1;

    case SET_SCORE:
      return action.payload;

    default:
      return state;
  }
}
