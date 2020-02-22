import {createAction} from 'redux-actions';
import {CHANGE_WINDOW_SIZE} from 'actions/screen/screenActionsTypes';
import {HEIGHT, WIDTH} from "./screenConstants";

export const changeWindowSize = (width, height) =>
    createAction(CHANGE_WINDOW_SIZE)({
      [WIDTH]: width,
      [HEIGHT]: height,
    });
