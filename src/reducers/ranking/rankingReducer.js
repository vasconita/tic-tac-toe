import Immutable from 'immutable';
import {ADD_NEW_SCORE} from 'actions/ranking/rankingActionsTypes';
import {SCORE, NAME} from 'actions/ranking/rankingConstants';

const initialState = Immutable.List([
  /*
   * Element example in list:
   *
   * {
   *   [SCORE]: scoreValue,
   *   [NAME]: nameValue,
   * }
   */

])
export default (state = initialState, action) =>
{
  switch (action.type)
  {
    case ADD_NEW_SCORE:

      const score = action.payload[SCORE];
      const name = action.payload[NAME];

      // Look if the same gamer has already played

      const gamerIndex = state.findIndex(game => game.get(NAME) === name);

      if (gamerIndex === -1)
      {
        state = state.push(Immutable.Map({
          [SCORE]: score,
          [NAME]: name,
        }));
      } else
      {
        state = state.setIn([gamerIndex, SCORE], score);
      }
      return state.sortBy((scoreEntry) => scoreEntry.get(SCORE));
    default:
      return state;

  }
}

export const getRanking = (state) => state;