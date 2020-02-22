export const SCORE = 'score';
export const GAME_IN_COURSE = 'gameInCourse';
export const ID = 'id';
export const GRID = 'grid';
export const SELECTED_BY_USER = 'selectedByUser';
export const SELECTED_BY_MACHINE = 'selectedByMachine';
export const USER_CAN_SELECT = 'userCanSelect';
export const GRID_ENTRIES = 9; // Standard Tic Tac Toe.
export const USER = 'user';
export const MACHINE = 'machine';
export const WINNER = 'winner';
export const GRID_KEYS = Array.from({length: GRID_ENTRIES}, (v, k) => k);

export const WIN_COMBINATIONS =
    [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontals
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Verticals
      [0, 4, 8], [2, 4, 6], // Diagonals
    ];
