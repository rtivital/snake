import { initialState as snakeInitialState } from './snake';
import { ResetAction, RESET } from './game';
import getRandomCoordinates from '../../utils/getRandomCoordinates';
import { Snake, Coordinate } from '../../types';

export const GENERATE_BAIT = 'bait/GENERATE_BAIT';

interface GenerateBaitAction {
  type: typeof GENERATE_BAIT;
  payload: Snake;
}

export const generateBait = (snake: Snake): GenerateBaitAction => ({ type: GENERATE_BAIT, payload: snake });

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
