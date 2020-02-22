import {combineReducers} from 'redux-immutable'
import currentGameReducer, * as currentGameSelectors from 'reducers/currentGame/currentGameReducer';
import rankingReducer from 'reducers/ranking/rankingReducer';
import screenReducer, * as screenSelectors from 'reducers/screen/screenReducer';

const CURRENT_GAME = 'currentGame';
const RANKING = 'ranking';
const SCREEN = 'screen';

export default combineReducers({
  [CURRENT_GAME]: currentGameReducer,
  [RANKING]: rankingReducer,
  [SCREEN]: screenReducer,
});


export const isGameInCourse = (state) => currentGameSelectors.isGameInCourse(state.get(CURRENT_GAME));

export const getCurrentScore = (state) => currentGameSelectors.getScore(state.get(CURRENT_GAME));

export const canUserSelect = (state) => currentGameSelectors.canUserSelect(state.get(CURRENT_GAME));

export const getRandomAvailableGridEntryId = (state) => currentGameSelectors.getRandomAvailableGridEntryId(state.get(CURRENT_GAME));

export const getWinner = (state) => currentGameSelectors.getWinner(state.get(CURRENT_GAME));


export const isGameFinished = (state) => currentGameSelectors.isGameFinished(state.get(CURRENT_GAME));

export const getScore = (state) => currentGameSelectors.getScore(state.get(CURRENT_GAME));

export const getGridEntryContent = (state, id) => currentGameSelectors.getGridEntryContent(state.get(CURRENT_GAME), id);

export const getWindowWidth = (state) => screenSelectors.getWindowWidth(state.get(SCREEN));

export const getWindowHeight = (state) => screenSelectors.getWindowHeight(state.get(SCREEN));
