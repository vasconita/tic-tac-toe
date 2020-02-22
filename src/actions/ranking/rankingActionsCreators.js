import {createAction} from 'redux-actions';
import {ADD_NEW_SCORE} from 'actions/ranking/rankingActionsTypes';
import {NAME, SCORE} from 'actions/ranking/rankingConstants';
import {getCurrentScore} from 'reducers/rootReducer';

export const addNewScore = (name) => (dispatch, getState) =>
    dispatch(createAction(ADD_NEW_SCORE)({
      [NAME]: name,
      [SCORE]: getCurrentScore(getState()),
    }));
