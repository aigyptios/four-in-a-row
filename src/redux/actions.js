export const PLAY_MOVE = '[GAME] Play Move';
export const playMove = (column) => ({
  type: PLAY_MOVE,
  payload: {
    column
  }
});

export const RESET_GAME = '[GAME] Reset Game';
export const resetGame = () => ({
  type: RESET_GAME
});