import Immutable from 'immutable';
import {END_GAME, START_GAME, CHANGE_CURRENT_SCORE, SELECT_GRID_ENTRY, SET_WINNER} from 'actions/currentGame/currentGameActionsTypes';
import {GAME_IN_COURSE, SCORE, ID, SELECTED_BY_USER, SELECTED_BY_MACHINE, GRID, USER_CAN_SELECT, GRID_ENTRIES, USER, MACHINE, WINNER} from 'actions/currentGame/currentGameConstants';
import {hasWinnerCombination} from 'actions/currentGame/currentGameUtil'

const initialState = Immutable.fromJS(
    {
      [SCORE]: 10000,
      [GAME_IN_COURSE]: false,
      [USER_CAN_SELECT]: true,
      [WINNER]: null,
      [GRID]: {
        /**
         * 0: ...
         * 1: ...
         * 2: ...
         */
      },
    });

export default (state = initialState, action) =>
{
  switch (action.type)
  {
    case START_GAME:
      return initialState.set(GAME_IN_COURSE, true);
    case END_GAME:
      return state.set(GAME_IN_COURSE, false);
    case SET_WINNER:
      return state.set(WINNER, action.payload[WINNER])
          .update(SCORE, score => action.payload[WINNER] ? score + 10000 : score);
    case CHANGE_CURRENT_SCORE:
      return state.set(SCORE, action.payload[SCORE]);
    case SELECT_GRID_ENTRY:
      return state.setIn([GRID, action.payload[ID]],
          action.payload[SELECTED_BY_USER] ? SELECTED_BY_USER : SELECTED_BY_MACHINE)
          .update(SCORE, score => score - 500)
          .set(USER_CAN_SELECT, !action.payload[SELECTED_BY_USER]);

    default:
      return state;

  }
}

export const isGameInCourse = (state) => state.get(GAME_IN_COURSE);

export const getScore = (state) => state.get(SCORE);

export const getGridEntryContent = (state, id) => state.getIn([GRID, id]);

export const canUserSelect = (state) => state.get(USER_CAN_SELECT);


const getAvailableGridEntriesIds = (state) =>
    Array.from({length: GRID_ENTRIES}, (v, k) => k)
        .filter(id => !getGridEntryContent(state, id));

export const getRandomAvailableGridEntryId = (state) =>
{
  const availableGridEntriesIds = getAvailableGridEntriesIds(state);

  return availableGridEntriesIds[Math.floor(Math.random() * availableGridEntriesIds.length)];
};

const getGridEntriesFilterByWhoSelected = (state, selectedByUserType) =>
    state.get(GRID)
        .reduce((accum, value, key) =>
        {

          if (value === selectedByUserType)
          {
            return accum.push(key);
          } else
          {
            return accum;
          }

        }, Immutable.List());

const isWinner = (state, userType) =>
{

  if (userType === USER)
  {
    return hasWinnerCombination(getGridEntriesFilterByWhoSelected(state, SELECTED_BY_USER));
  } else if (userType === MACHINE)
  {
    return hasWinnerCombination(getGridEntriesFilterByWhoSelected(state, SELECTED_BY_MACHINE));
  } else
  {
    return false;
  }
};

export const getWinner = (state) =>
{

  if (state.get(WINNER))
    return state.get(WINNER);


  if (isWinner(state, USER))
  {
    return USER;
  } else if (isWinner(state, MACHINE))
  {
    return MACHINE;
  } else
  {
    return null;
  }
};

export const isGameFinished = (state) => state.get(GRID).size === GRID_ENTRIES || getWinner(state) != null;