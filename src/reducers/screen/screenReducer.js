import Immutable from 'immutable';
import {CHANGE_WINDOW_SIZE} from 'actions/screen/screenActionsTypes';
import {WIDTH, HEIGHT} from 'actions/screen/screenConstants';

const WINDOW_WIDTH = 'windowWidth';
const WINDOW_HEIGHT = 'windowHeight';

const initialState = Immutable.Map();

export default (state = initialState, action) =>
{
  switch (action.type)
  {
    case CHANGE_WINDOW_SIZE:

      return state.set(WINDOW_WIDTH, action.payload[WIDTH])
          .set(WINDOW_HEIGHT, action.payload[HEIGHT]);
    default:
      return state;

  }
}

export const getWindowWidth = (state) => state.get(WINDOW_WIDTH);

export const getWindowHeight = (state) => state.get(WINDOW_HEIGHT);

