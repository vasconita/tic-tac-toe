import {WIN_COMBINATIONS} from 'actions/currentGame/currentGameConstants';

export const hasWinnerCombination = (ids) =>
    ids && ids.size >= 3 && // If there is less than 3 grid entries selected, it hasn't win
    WIN_COMBINATIONS.reduce((hasWinnerCombination, currentWinnerCombination) =>
    {
      if (hasWinnerCombination)
        return hasWinnerCombination;

      return currentWinnerCombination.every(id => ids.includes(id));
    }, false);