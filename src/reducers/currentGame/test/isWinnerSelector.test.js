import {initialState, isWinner} from 'reducers/currentGame/currentGameReducer';
import {USER, MACHINE} from 'actions/currentGame/currentGameConstants';
import {
  TEST_BOARD_1,
  TEST_BOARD_2,
  TEST_BOARD_3,
  TEST_BOARD_4,
  TEST_BOARD_5,
  TEST_BOARD_6,
  TEST_BOARD_7,
  TEST_BOARD_8,
  TEST_BOARD_9,
  TEST_BOARD_10,
  TEST_BOARD_11,
  TEST_BOARD_12,
  TEST_BOARD_13,
  TEST_BOARD_14,
  TEST_BOARD_15,
  TEST_BOARD_16,
} from "./testBoards";

describe('Test isWinner selector: Empty board', () =>
{

  it('Empty board, user doesn\'t wins', () =>
  {
    const value = isWinner(initialState, USER);
    const expectedValue = false;

    expect(value).toEqual(expectedValue);
  });

  it('Empty board, machine doesn\'t win.', () =>
  {
    const value = isWinner(initialState, MACHINE);
    const expectedValue = false;

    expect(value).toEqual(expectedValue);
  });

});

describe('Test isWinner selector: Not fully filled inconclusive boards', () =>
{

  it('Not fully filled inconclusive board 1, user doesn\'t win.', () =>
  {
    const value = isWinner(TEST_BOARD_1, USER);
    const expectedValue = false;

    expect(value).toEqual(expectedValue);
  });

  it('Not fully filled inconclusive board 1, machine doesn\'t win.', () =>
  {
    const value = isWinner(TEST_BOARD_1, MACHINE);
    const expectedValue = false;

    expect(value).toEqual(expectedValue);
  });

  it('Not fully filled inconclusive board 2, user doesn\'t win.', () =>
  {
    const value = isWinner(TEST_BOARD_2, USER);
    const expectedValue = false;

    expect(value).toEqual(expectedValue);
  });

  it('Not fully filled inconclusive board 2, machine doesn\'t win.', () =>
  {
    const value = isWinner(TEST_BOARD_2, MACHINE);
    const expectedValue = false;

    expect(value).toEqual(expectedValue);
  });

  it('Not fully filled inconclusive board 3, user doesn\'t win.', () =>
  {
    const value = isWinner(TEST_BOARD_3, USER);
    const expectedValue = false;

    expect(value).toEqual(expectedValue);
  });

  it('Not fully filled inconclusive board 3, machine doesn\'t win.', () =>
  {
    const value = isWinner(TEST_BOARD_3, MACHINE);
    const expectedValue = false;

    expect(value).toEqual(expectedValue);
  });

  it('Not fully filled inconclusive board 4, user doesn\'t win.', () =>
  {
    const value = isWinner(TEST_BOARD_4, USER);
    const expectedValue = false;

    expect(value).toEqual(expectedValue);
  });

  it('Not fully filled inconclusive board 4, machine doesn\'t win.', () =>
  {
    const value = isWinner(TEST_BOARD_4, MACHINE);
    const expectedValue = false;

    expect(value).toEqual(expectedValue);
  });

});

describe('Test isWinner selector: Fully filled inconclusive boards', () =>
{

  it('Fully filled inconclusive board 1, user doesn\'t win.', () =>
  {
    const value = isWinner(TEST_BOARD_5, USER);
    const expectedValue = false;

    expect(value).toEqual(expectedValue);
  });

  it('Fully filled inconclusive board 1, machine doesn\'t win.', () =>
  {
    const value = isWinner(TEST_BOARD_5, MACHINE);
    const expectedValue = false;

    expect(value).toEqual(expectedValue);
  });

  it('Fully filled inconclusive board 2, user doesn\'t win.', () =>
  {
    const value = isWinner(TEST_BOARD_6, USER);
    const expectedValue = false;

    expect(value).toEqual(expectedValue);
  });

  it('Fully filled inconclusive board 2, machine doesn\'t win.', () =>
  {
    const value = isWinner(TEST_BOARD_6, MACHINE);
    const expectedValue = false;

    expect(value).toEqual(expectedValue);
  });

  it('Fully filled inconclusive board 3, user doesn\'t win.', () =>
  {
    const value = isWinner(TEST_BOARD_7, USER);
    const expectedValue = false;

    expect(value).toEqual(expectedValue);
  });

  it('Fully filled inconclusive board 3, machine doesn\'t win.', () =>
  {
    const value = isWinner(TEST_BOARD_7, MACHINE);
    const expectedValue = false;

    expect(value).toEqual(expectedValue);
  });

  it('Fully filled inconclusive board 4, user doesn\'t win.', () =>
  {
    const value = isWinner(TEST_BOARD_8, USER);
    const expectedValue = false;

    expect(value).toEqual(expectedValue);
  });

  it('Fully filled inconclusive board 4, machine doesn\'t win.', () =>
  {
    const value = isWinner(TEST_BOARD_8, MACHINE);
    const expectedValue = false;

    expect(value).toEqual(expectedValue);
  });

});


describe('Test isWinner selector: Not fully filled conclusive boards', () =>
{

  it('Not fully filled conclusive board 1, user doesn\'t win.', () =>
  {
    const value = isWinner(TEST_BOARD_9, USER);
    const expectedValue = false;

    expect(value).toEqual(expectedValue);
  });

  it('Not fully filled conclusive board 1, machine wins.', () =>
  {
    const value = isWinner(TEST_BOARD_9, MACHINE);
    const expectedValue = true;

    expect(value).toEqual(expectedValue);
  });

  it('Not fully filled conclusive board 2, user wins.', () =>
  {
    const value = isWinner(TEST_BOARD_10, USER);
    const expectedValue = true;

    expect(value).toEqual(expectedValue);
  });

  it('Not fully filled conclusive board 2, machine doesn\'t win.', () =>
  {
    const value = isWinner(TEST_BOARD_10, MACHINE);
    const expectedValue = false;

    expect(value).toEqual(expectedValue);
  });

  it('Not fully filled conclusive board 3, user doesn\'t win.', () =>
  {
    const value = isWinner(TEST_BOARD_11, USER);
    const expectedValue = false;

    expect(value).toEqual(expectedValue);
  });

  it('Not fully filled conclusive board 3, machine wins.', () =>
  {
    const value = isWinner(TEST_BOARD_11, MACHINE);
    const expectedValue = true;

    expect(value).toEqual(expectedValue);
  });

  it('Not fully filled conclusive board 4, user wins.', () =>
  {
    const value = isWinner(TEST_BOARD_12, USER);
    const expectedValue = true;

    expect(value).toEqual(expectedValue);
  });

  it('Not fully filled conclusive board 4, machine doesn\'t win.', () =>
  {
    const value = isWinner(TEST_BOARD_12, MACHINE);
    const expectedValue = false;

    expect(value).toEqual(expectedValue);
  });


});


describe('Test isWinner selector: Fully filled conclusive boards', () =>
{

  it('Fully filled conclusive board 1, user wins.', () =>
  {
    const value = isWinner(TEST_BOARD_13, USER);
    const expectedValue = true;

    expect(value).toEqual(expectedValue);
  });

  it('Fully filled conclusive board 1, machine doesn\'t win.', () =>
  {
    const value = isWinner(TEST_BOARD_13, MACHINE);
    const expectedValue = false;

    expect(value).toEqual(expectedValue);
  });


  it('Fully filled conclusive board 2, user wins.', () =>
  {
    const value = isWinner(TEST_BOARD_14, USER);
    const expectedValue = true;

    expect(value).toEqual(expectedValue);
  });

  it('Fully filled conclusive board 2, machine doesn\'t win.', () =>
  {
    const value = isWinner(TEST_BOARD_14, MACHINE);
    const expectedValue = false;

    expect(value).toEqual(expectedValue);
  });

  it('Fully filled conclusive board 3, user wins.', () =>
  {
    const value = isWinner(TEST_BOARD_15, USER);
    const expectedValue = true;

    expect(value).toEqual(expectedValue);
  });

  it('Fully filled conclusive board 3, machine doesn\'t win.', () =>
  {
    const value = isWinner(TEST_BOARD_15, MACHINE);
    const expectedValue = false;

    expect(value).toEqual(expectedValue);
  });

  it('Fully filled conclusive board 4, user wins.', () =>
  {
    const value = isWinner(TEST_BOARD_16, USER);
    const expectedValue = true;

    expect(value).toEqual(expectedValue);
  });

  it('Fully filled conclusive board 4, machine doesn\'t win.', () =>
  {
    const value = isWinner(TEST_BOARD_16, MACHINE);
    const expectedValue = false;

    expect(value).toEqual(expectedValue);
  });


});
