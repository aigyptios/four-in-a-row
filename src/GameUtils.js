export const ROWS = 6;
export const COLUMNS = 7;

export const PLAYER_1 = 'PLAYER_1';
export const PLAYER_2 = 'PLAYER_2';
export const EMPTY = 'EMPTY';

// Pure
export const createNewGrid = (initialGrid) => {
  const grid = [];
  for (let i = 0; i < COLUMNS; i++) {
    const column = [];
    for (let j = 0; j < ROWS; j++) {
      if (!initialGrid) {
        column.push(EMPTY);
      } else {
        column.push(initialGrid[i][j]);
      }
    }
    grid.push(column);
  }
  return grid;
}

// Pure
export const addTokenToColumn = (column, player, initialGrid) => {
  let updatedGrid = createNewGrid(initialGrid);
  const firstEmptyIndex = updatedGrid[column].indexOf(EMPTY);
  if (firstEmptyIndex > -1) {
    updatedGrid[column][firstEmptyIndex] = player;
  }
  return updatedGrid;
}

// Pure
export const togglePlayer = (player) => {
  return (
    player === PLAYER_1 ? PLAYER_2 : 
    player === PLAYER_2 ? PLAYER_1 :
    EMPTY
  );
}