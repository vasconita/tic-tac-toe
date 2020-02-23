import {initialState} from 'reducers/currentGame/currentGameReducer';
import {GRID, SELECTED_BY_USER, SELECTED_BY_MACHINE} from 'actions/currentGame/currentGameConstants';

/******************************************/
/*  Not fully filled inconclusive boards  */
/******************************************/

/*****************
 *     | X | O   *
 *  -----------  *
 *     |   | X   *
 *  -----------  *
 *   O |   |     *
 *****************/
export const TEST_BOARD_1 = initialState
    .setIn([GRID, 0], undefined)
    .setIn([GRID, 1], SELECTED_BY_USER)
    .setIn([GRID, 2], SELECTED_BY_MACHINE)
    .setIn([GRID, 3], undefined)
    .setIn([GRID, 4], undefined)
    .setIn([GRID, 5], SELECTED_BY_USER)
    .setIn([GRID, 6], SELECTED_BY_MACHINE)
    .setIn([GRID, 7], undefined)
    .setIn([GRID, 8], undefined);

/*****************
 *     |   |     *
 *  -----------  *
 *     | X |     *
 *  -----------  *
 *   O | O | X   *
 *****************/
export const TEST_BOARD_2 = initialState
    .setIn([GRID, 0], undefined)
    .setIn([GRID, 1], undefined)
    .setIn([GRID, 2], undefined)
    .setIn([GRID, 3], undefined)
    .setIn([GRID, 4], SELECTED_BY_USER)
    .setIn([GRID, 5], undefined)
    .setIn([GRID, 6], SELECTED_BY_MACHINE)
    .setIn([GRID, 7], SELECTED_BY_MACHINE)
    .setIn([GRID, 8], SELECTED_BY_USER);

/*****************
 *     | O |     *
 *  -----------  *
 *     | X | x   *
 *  -----------  *
 *   O | O | X   *
 *****************/
export const TEST_BOARD_3 = initialState
    .setIn([GRID, 0], undefined)
    .setIn([GRID, 1], SELECTED_BY_MACHINE)
    .setIn([GRID, 2], undefined)
    .setIn([GRID, 3], undefined)
    .setIn([GRID, 4], SELECTED_BY_USER)
    .setIn([GRID, 5], SELECTED_BY_USER)
    .setIn([GRID, 6], SELECTED_BY_MACHINE)
    .setIn([GRID, 7], SELECTED_BY_MACHINE)
    .setIn([GRID, 8], SELECTED_BY_USER);


/*****************
 *     | O | O   *
 *  -----------  *
 *   O | X | x   *
 *  -----------  *
 *   X | O | X   *
 *****************/
export const TEST_BOARD_4 = initialState
    .setIn([GRID, 0], undefined)
    .setIn([GRID, 1], SELECTED_BY_MACHINE)
    .setIn([GRID, 2], SELECTED_BY_MACHINE)
    .setIn([GRID, 3], SELECTED_BY_MACHINE)
    .setIn([GRID, 4], SELECTED_BY_USER)
    .setIn([GRID, 5], SELECTED_BY_USER)
    .setIn([GRID, 6], SELECTED_BY_USER)
    .setIn([GRID, 7], SELECTED_BY_MACHINE)
    .setIn([GRID, 8], SELECTED_BY_USER);

/**************************************/
/*  Fully filled inconclusive boards  */
/**************************************/

/*****************
 *   X | X | O   *
 *  -----------  *
 *   O | O | X   *
 *  -----------  *
 *   X | O | X   *
 *****************/
export const TEST_BOARD_5 = initialState
    .setIn([GRID, 0], SELECTED_BY_USER)
    .setIn([GRID, 1], SELECTED_BY_USER)
    .setIn([GRID, 2], SELECTED_BY_MACHINE)
    .setIn([GRID, 3], SELECTED_BY_MACHINE)
    .setIn([GRID, 4], SELECTED_BY_MACHINE)
    .setIn([GRID, 5], SELECTED_BY_USER)
    .setIn([GRID, 6], SELECTED_BY_USER)
    .setIn([GRID, 7], SELECTED_BY_MACHINE)
    .setIn([GRID, 8], SELECTED_BY_USER);

/*****************
 *   O | X | O   *
 *  -----------  *
 *   X | O | X   *
 *  -----------  *
 *   X | O | X   *
 *****************/
export const TEST_BOARD_6 = initialState
    .setIn([GRID, 0], SELECTED_BY_MACHINE)
    .setIn([GRID, 1], SELECTED_BY_USER)
    .setIn([GRID, 2], SELECTED_BY_MACHINE)
    .setIn([GRID, 3], SELECTED_BY_USER)
    .setIn([GRID, 4], SELECTED_BY_MACHINE)
    .setIn([GRID, 5], SELECTED_BY_USER)
    .setIn([GRID, 6], SELECTED_BY_USER)
    .setIn([GRID, 7], SELECTED_BY_MACHINE)
    .setIn([GRID, 8], SELECTED_BY_USER);


/*****************
 *   X | O | X   *
 *  -----------  *
 *   X | O | X   *
 *  -----------  *
 *   O | X | O   *
 *****************/
export const TEST_BOARD_7 = initialState
    .setIn([GRID, 0], SELECTED_BY_USER)
    .setIn([GRID, 1], SELECTED_BY_MACHINE)
    .setIn([GRID, 2], SELECTED_BY_USER)
    .setIn([GRID, 3], SELECTED_BY_USER)
    .setIn([GRID, 4], SELECTED_BY_MACHINE)
    .setIn([GRID, 5], SELECTED_BY_USER)
    .setIn([GRID, 6], SELECTED_BY_MACHINE)
    .setIn([GRID, 7], SELECTED_BY_USER)
    .setIn([GRID, 8], SELECTED_BY_MACHINE);


/*****************
 *   X | O | X   *
 *  -----------  *
 *   X | O | O   *
 *  -----------  *
 *   O | X | X   *
 *****************/
export const TEST_BOARD_8 = initialState
    .setIn([GRID, 0], SELECTED_BY_USER)
    .setIn([GRID, 1], SELECTED_BY_MACHINE)
    .setIn([GRID, 2], SELECTED_BY_USER)
    .setIn([GRID, 3], SELECTED_BY_USER)
    .setIn([GRID, 4], SELECTED_BY_MACHINE)
    .setIn([GRID, 5], SELECTED_BY_MACHINE)
    .setIn([GRID, 6], SELECTED_BY_MACHINE)
    .setIn([GRID, 7], SELECTED_BY_USER)
    .setIn([GRID, 8], SELECTED_BY_USER);


/******************************************/
/*  Not fully filled conclusive boards  */
/******************************************/

/*****************
 *     | X | X   *
 *  -----------  *
 *   X | O | X   *
 *  -----------  *
 *   O | O | O   *
 *****************/
export const TEST_BOARD_9 = initialState
    .setIn([GRID, 0], undefined)
    .setIn([GRID, 1], SELECTED_BY_USER)
    .setIn([GRID, 2], SELECTED_BY_USER)
    .setIn([GRID, 3], SELECTED_BY_USER)
    .setIn([GRID, 4], SELECTED_BY_MACHINE)
    .setIn([GRID, 5], SELECTED_BY_USER)
    .setIn([GRID, 6], SELECTED_BY_MACHINE)
    .setIn([GRID, 7], SELECTED_BY_MACHINE)
    .setIn([GRID, 8], SELECTED_BY_MACHINE);

/*****************
 *     | X | X   *
 *  -----------  *
 *   X | O | X   *
 *  -----------  *
 *   O | O | X   *
 *****************/
export const TEST_BOARD_10 = initialState
    .setIn([GRID, 0], undefined)
    .setIn([GRID, 1], SELECTED_BY_USER)
    .setIn([GRID, 2], SELECTED_BY_USER)
    .setIn([GRID, 3], SELECTED_BY_USER)
    .setIn([GRID, 4], SELECTED_BY_MACHINE)
    .setIn([GRID, 5], SELECTED_BY_USER)
    .setIn([GRID, 6], SELECTED_BY_MACHINE)
    .setIn([GRID, 7], SELECTED_BY_MACHINE)
    .setIn([GRID, 8], SELECTED_BY_USER);


/*****************
 *     | X | O   *
 *  -----------  *
 *   X | O | X   *
 *  -----------  *
 *   O | O | X   *
 *****************/
export const TEST_BOARD_11 = initialState
    .setIn([GRID, 0], undefined)
    .setIn([GRID, 1], SELECTED_BY_USER)
    .setIn([GRID, 2], SELECTED_BY_MACHINE)
    .setIn([GRID, 3], SELECTED_BY_USER)
    .setIn([GRID, 4], SELECTED_BY_MACHINE)
    .setIn([GRID, 5], SELECTED_BY_USER)
    .setIn([GRID, 6], SELECTED_BY_MACHINE)
    .setIn([GRID, 7], SELECTED_BY_MACHINE)
    .setIn([GRID, 8], SELECTED_BY_USER);

/*****************
 *     |   | O   *
 *  -----------  *
 *   X | X | X   *
 *  -----------  *
 *   O | O | X   *
 *****************/
export const TEST_BOARD_12 = initialState
    .setIn([GRID, 0], undefined)
    .setIn([GRID, 1], undefined)
    .setIn([GRID, 2], SELECTED_BY_MACHINE)
    .setIn([GRID, 3], SELECTED_BY_USER)
    .setIn([GRID, 4], SELECTED_BY_USER)
    .setIn([GRID, 5], SELECTED_BY_USER)
    .setIn([GRID, 6], SELECTED_BY_MACHINE)
    .setIn([GRID, 7], SELECTED_BY_MACHINE)
    .setIn([GRID, 8], SELECTED_BY_USER);


/**************************************/
/*  Fully filled conclusive boards  */
/**************************************/

/*****************
 *   X | X | X   *
 *  -----------  *
 *   O | O | X   *
 *  -----------  *
 *   O | O | X   *
 *****************/
export const TEST_BOARD_13 = initialState
    .setIn([GRID, 0], SELECTED_BY_USER)
    .setIn([GRID, 1], SELECTED_BY_USER)
    .setIn([GRID, 2], SELECTED_BY_USER)
    .setIn([GRID, 3], SELECTED_BY_MACHINE)
    .setIn([GRID, 4], SELECTED_BY_MACHINE)
    .setIn([GRID, 5], SELECTED_BY_USER)
    .setIn([GRID, 6], SELECTED_BY_MACHINE)
    .setIn([GRID, 7], SELECTED_BY_MACHINE)
    .setIn([GRID, 8], SELECTED_BY_USER);

/*****************
 *   O | X | O   *
 *  -----------  *
 *   O | O | X   *
 *  -----------  *
 *   X | X | X   *
 *****************/
export const TEST_BOARD_14 = initialState
    .setIn([GRID, 0], SELECTED_BY_MACHINE)
    .setIn([GRID, 1], SELECTED_BY_USER)
    .setIn([GRID, 2], SELECTED_BY_MACHINE)
    .setIn([GRID, 3], SELECTED_BY_MACHINE)
    .setIn([GRID, 4], SELECTED_BY_MACHINE)
    .setIn([GRID, 5], SELECTED_BY_USER)
    .setIn([GRID, 6], SELECTED_BY_USER)
    .setIn([GRID, 7], SELECTED_BY_USER)
    .setIn([GRID, 8], SELECTED_BY_USER);


/*****************
 *   X | O | X   *
 *  -----------  *
 *   O | X | X   *
 *  -----------  *
 *   O | O | X   *
 *****************/
export const TEST_BOARD_15 = initialState
    .setIn([GRID, 0], SELECTED_BY_USER)
    .setIn([GRID, 1], SELECTED_BY_MACHINE)
    .setIn([GRID, 2], SELECTED_BY_USER)
    .setIn([GRID, 3], SELECTED_BY_MACHINE)
    .setIn([GRID, 4], SELECTED_BY_USER)
    .setIn([GRID, 5], SELECTED_BY_USER)
    .setIn([GRID, 6], SELECTED_BY_MACHINE)
    .setIn([GRID, 7], SELECTED_BY_MACHINE)
    .setIn([GRID, 8], SELECTED_BY_USER);


/*****************
 *   X | O | X   *
 *  -----------  *
 *   X | O | O   *
 *  -----------  *
 *   X | X | O   *
 *****************/
export const TEST_BOARD_16 = initialState
    .setIn([GRID, 0], SELECTED_BY_USER)
    .setIn([GRID, 1], SELECTED_BY_MACHINE)
    .setIn([GRID, 2], SELECTED_BY_USER)
    .setIn([GRID, 3], SELECTED_BY_USER)
    .setIn([GRID, 4], SELECTED_BY_MACHINE)
    .setIn([GRID, 5], SELECTED_BY_MACHINE)
    .setIn([GRID, 6], SELECTED_BY_USER)
    .setIn([GRID, 7], SELECTED_BY_USER)
    .setIn([GRID, 8], SELECTED_BY_MACHINE);