import {initialState, isGameFinished} from 'reducers/currentGame/currentGameReducer';
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

describe('Test isGameFinished selector: Empty board', () =>
{

  it('Empty board, game not finished.', () =>
  {
    const value = isGameFinished(initialState, USER);
    const expectedValue = false;

    expect(value).toEqual(expectedValue);
  });

});

describe('Test isGameFinished selector: Not fully filled inconclusive boards', () =>
{

  it('Not fully filled inconclusive board 1, game not finished.', () =>
  {
    const value = isGameFinished(TEST_BOARD_1, USER);
    const expectedValue = false;

    expect(value).toEqual(expectedValue);
  });

  it('Not fully filled inconclusive board 2, game not finished.', () =>
  {
    const value = isGameFinished(TEST_BOARD_2, USER);
    const expectedValue = false;

    expect(value).toEqual(expectedValue);
  });


  it('Not fully filled inconclusive board 3, game not finished.', () =>
  {
    const value = isGameFinished(TEST_BOARD_3, USER);
    const expectedValue = false;

    expect(value).toEqual(expectedValue);
  });


  it('Not fully filled inconclusive board 4, game not finished.', () =>
  {
    const value = isGameFinished(TEST_BOARD_4, USER);
    const expectedValue = false;

    expect(value).toEqual(expectedValue);
  });

});

describe('Test isGameFinished selector: Fully filled inconclusive boards', () =>
{

  it('Fully filled inconclusive board 1, game not finished.', () =>
  {
    const value = isGameFinished(TEST_BOARD_5, USER);
    const expectedValue = true;

    expect(value).toEqual(expectedValue);
  });


  it('Fully filled inconclusive board 2, game not finished.', () =>
  {
    const value = isGameFinished(TEST_BOARD_6, USER);
    const expectedValue = true;

    expect(value).toEqual(expectedValue);
  });


  it('Fully filled inconclusive board 3, game not finished.', () =>
  {
    const value = isGameFinished(TEST_BOARD_7, USER);
    const expectedValue = true;

    expect(value).toEqual(expectedValue);
  });


  it('Fully filled inconclusive board 4, game not finished.', () =>
  {
    const value = isGameFinished(TEST_BOARD_8, USER);
    const expectedValue = true;

    expect(value).toEqual(expectedValue);
  });

});


describe('Test isGameFinished selector: Not fully filled conclusive boards', () =>
{

  it('Not fully filled conclusive board 1, game finished.', () =>
  {
    const value = isGameFinished(TEST_BOARD_9, USER);
    const expectedValue = true;

    expect(value).toEqual(expectedValue);
  });

  it('Not fully filled conclusive board 2, game finished.', () =>
  {
    const value = isGameFinished(TEST_BOARD_10, USER);
    const expectedValue = true;

    expect(value).toEqual(expectedValue);
  });

  it('Not fully filled conclusive board 3, game finished.', () =>
  {
    const value = isGameFinished(TEST_BOARD_11, USER);
    const expectedValue = true;

    expect(value).toEqual(expectedValue);
  });

  it('Not fully filled conclusive board 4, game finished.', () =>
  {
    const value = isGameFinished(TEST_BOARD_12, USER);
    const expectedValue = true;

    expect(value).toEqual(expectedValue);
  });

});


describe('Test isGameFinished selector: Fully filled conclusive boards', () =>
{

  it('Fully filled conclusive board 1, game finished.', () =>
  {
    const value = isGameFinished(TEST_BOARD_13, USER);
    const expectedValue = true;

    expect(value).toEqual(expectedValue);
  });

  it('Fully filled conclusive board 2, game finished.', () =>
  {
    const value = isGameFinished(TEST_BOARD_14, USER);
    const expectedValue = true;

    expect(value).toEqual(expectedValue);
  });

  it('Fully filled conclusive board 3, game finished.', () =>
  {
    const value = isGameFinished(TEST_BOARD_15, USER);
    const expectedValue = true;

    expect(value).toEqual(expectedValue);
  });

  it('Fully filled conclusive board 4, game finished.', () =>
  {
    const value = isGameFinished(TEST_BOARD_16, USER);
    const expectedValue = true;

    expect(value).toEqual(expectedValue);
  });


});
