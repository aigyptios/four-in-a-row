import { PLAY_MOVE, playMove, RESET_GAME, resetGame } from './actions';

describe('The actions', () => {

  test('The playMove function should return an object of type \'PLAY_MOVE\'', () => {
    const column = 2;
    const action = playMove( column );
    expect( action ).toStrictEqual({
      type: PLAY_MOVE,
      payload: {
        column
      }
    });
  });

  test('The resetGame function should return an object of type \'RESET_GAME\'', () => {
    const action = resetGame();
    expect( action ).toStrictEqual({
      type: RESET_GAME,
    });
  });

});
