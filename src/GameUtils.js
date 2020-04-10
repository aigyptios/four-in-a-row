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

export const gridWinner = ( grid, lastPlayedColumn ) => {

  const player1WinsString = 'PLAYER_1PLAYER_1PLAYER_1PLAYER_1';
  const player2WinsString = 'PLAYER_2PLAYER_2PLAYER_2PLAYER_2';

  // (1) get row of last played token
  const firstEmpty = grid[ lastPlayedColumn ].indexOf( EMPTY );
  let lastPlayedRow;
  if ( firstEmpty === -1 ) { 
    lastPlayedRow = ROWS;
  } else {
    lastPlayedRow = firstEmpty - 1;
  }

  // (2) check if column contains win
  const columnAsString = grid[ lastPlayedColumn ].join('');
  if ( columnAsString.includes( player1WinsString ) ) {
    return PLAYER_1;
  }
  if ( columnAsString.includes( player2WinsString ) ) {
    return PLAYER_2;
  }

  // (3) check if row contains win
  let rowAsString = '';
  for (var i = 0; i < COLUMNS; i++) {
    rowAsString += grid[ i ][ lastPlayedRow ];
  }
  if ( rowAsString.includes( player1WinsString ) ) {
    return PLAYER_1;
  }
  if ( rowAsString.includes( player2WinsString ) ) {
    return PLAYER_2;
  }

  // (4) check if upward diagonal contains win
  // (4.1) get initial row and column of upward diagonal containing last played token
  let r = lastPlayedRow;
  let c = lastPlayedColumn;
  while ( r > 0 && c > 0 ) {
    r--;
    c--;
  }
  let diagonalAsString = '';
  while ( r < ROWS - 1 && c < COLUMNS - 1 ) {
    diagonalAsString += grid[ c ][ r ];
    r++;
    c++;
  }
  if ( diagonalAsString.includes( player1WinsString ) ) {
    return PLAYER_1;
  }
  if ( diagonalAsString.includes( player2WinsString ) ) {
    return PLAYER_2;
  }

  // (5) check if downward diagonal contains win
  r = lastPlayedRow;
  c = lastPlayedColumn;
  while ( r < ROWS - 1 && c > 0 ) {
    r++;
    c--;
  }
  diagonalAsString = '';
  while ( r >= 0 && c < COLUMNS - 1) {
    diagonalAsString += grid[ c ][ r ];
    r--;
    c++;
  }
  if ( diagonalAsString.includes( player1WinsString ) ) {
    return PLAYER_1;
  }
  if ( diagonalAsString.includes( player2WinsString ) ) {
    return PLAYER_2;
  }

  return EMPTY;
}