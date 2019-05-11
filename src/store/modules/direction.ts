export type DirectionState = 'left' | 'right' | 'down' | 'up';

export const SET_DIRECTION = 'direction/SET_DIRECTION';

interface SetDirectionAction {
  type: typeof SET_DIRECTION;
  payload: DirectionState;
}

export type DirectionActions = SetDirectionAction;

export const setDirection = (direction: DirectionState): SetDirectionAction => ({
  type: SET_DIRECTION,
  payload: direction,
});

function isOpositeDirection(direction: DirectionState, nextDirection: DirectionState): boolean {
  if (direction === 'up') {
    return nextDirection === 'down';
  }

  if (direction === 'down') {
    return nextDirection === 'up';
  }

  if (direction === 'left') {
    return nextDirection === 'right';
  }

  if (direction === 'right') {
    return nextDirection === 'left';
  }

  return false;
}

export default function directionReducer(state: DirectionState = 'up', action: DirectionActions): DirectionState {
  if (action.type === SET_DIRECTION) {
    return isOpositeDirection(state, action.payload) ? state : action.payload;
  }

  return state;
}
