export const ROWS = 6;
export const COLUMNS = 7;

export const PLAYER_1 = 'PLAYER_1';
export const PLAYER_2 = 'PLAYER_2';
export const EMPTY = 'EMPTY';

export const createNewGrid = (state) => {

  const grid = [];
  for (let i = 0; i < COLUMNS; i++) {
    const column = [];
    for (let j = 0; j < ROWS; j++) {
      if (!state) {
        column.push(EMPTY);
      } else {
        column.push(state[i][j]);
      }
    }
    grid.push(column);
  }
  return grid;

}