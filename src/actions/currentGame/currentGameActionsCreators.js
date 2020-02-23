import {createAction} from 'redux-actions';
import {START_GAME, END_GAME, CHANGE_CURRENT_SCORE, SELECT_GRID_ENTRY, SET_WINNER} from 'actions/currentGame/currentGameActionsTypes';
import {getRandomAvailableGridEntryId, getWinner, isGameFinished} from 'reducers/rootReducer';
import {SCORE, ID, SELECTED_BY_USER, WINNER} from 'actions/currentGame/currentGameConstants';
import {NEW_SCORE} from 'routing/routes';

export const startGame = () => createAction(START_GAME)({});
export const endGame = () => createAction(END_GAME)({});
export const changeCurrentScore = (score) => createAction(CHANGE_CURRENT_SCORE)({[SCORE]: score});
export const setWinner = (winner) => createAction(SET_WINNER)({[WINNER]: winner});

const MACHINE_ANSWER_DELAY_IN_MS = 2000;
const AFTER_WIN_DELAY = 2000;

const getSelectGridEntryAction = (id, selectedByUser) => createAction(SELECT_GRID_ENTRY)(
    {
      [ID]: id,
      [SELECTED_BY_USER]: selectedByUser,
    });

export const selectGridEntry = (id) => (dispatch, getState) =>
{
  // Dispatch User selection
  dispatch(getSelectGridEntryAction(id, true));

  // CheckIfGameIsFinished

  checkIfSomeoneWins(dispatch, getState);

  if (!isGameFinished(getState()))
  {
    // Choose a random grid entry
    const machineRandomSelectedId = getRandomAvailableGridEntryId(getState());

    setTimeout(() =>
    {
      dispatch(getSelectGridEntryAction(machineRandomSelectedId, false))
      checkIfSomeoneWins(dispatch, getState);
    }, MACHINE_ANSWER_DELAY_IN_MS)
  }


};

const checkIfSomeoneWins = (dispatch, getState) =>
{

  if (isGameFinished(getState()))
  {

    const winner = getWinner(getState());

    setTimeout(() =>
        {
          window.location.hash = NEW_SCORE;
          dispatch(setWinner(winner))
        }
        , AFTER_WIN_DELAY)
  }
};
