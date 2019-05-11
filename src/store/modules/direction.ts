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

export default function directionReducer(state: DirectionState = 'up', action: DirectionActions): DirectionState {
  if (action.type === SET_DIRECTION) {
    return action.payload;
  }

  return state;
}
