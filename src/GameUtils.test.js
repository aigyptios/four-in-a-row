import {
  PLAYER_1,
  PLAYER_2,
  EMPTY,
  createNewGrid,
  addTokenToColumn,
  togglePlayer,
  getColumnFreeSlotIndices
} from './GameUtils';

describe('GameUtils', ()=> {

  test('It should create a new empty grid from scratch', () => {
    const grid = createNewGrid();
    const expectedGrid = [
      [ EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY ],
      [ EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY ],
      [ EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY ],
      [ EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY ],
      [ EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY ],
      [ EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY ],
      [ EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY ],
    ];
    expect( grid ).toStrictEqual( expectedGrid );
  });

  test('It should create a copy of an existing grid', () => {
    let grid = createNewGrid();
    grid[2][0] = PLAYER_2;
    grid[3][4] = PLAYER_1;
    const actualGrid = createNewGrid( grid );
    const expectedGrid = [
      [ EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY ],
      [ EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY ],
      [ PLAYER_2, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY ],
      [ EMPTY, EMPTY, EMPTY, EMPTY, PLAYER_1, EMPTY ],
      [ EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY ],
      [ EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY ],
      [ EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY ],
    ];
    expect( actualGrid ).toStrictEqual( expectedGrid );
  });

  test('It should add a token to the correct slot', ()=> {
    let grid = createNewGrid();
    grid = addTokenToColumn( 0, PLAYER_2, grid );
    grid = addTokenToColumn( 0, PLAYER_1, grid );
    const expectedGrid = [
      [ PLAYER_2, PLAYER_1, EMPTY, EMPTY, EMPTY, EMPTY ],
      [ EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY ],
      [ EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY ],
      [ EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY ],
      [ EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY ],
      [ EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY ],
      [ EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY ],
    ];
    expect( grid ).toStrictEqual( expectedGrid );
  });

  test('It should toggle the player', () => {
    expect( togglePlayer( PLAYER_1 ) ).toEqual( PLAYER_2 );
    expect( togglePlayer( PLAYER_2 ) ).toEqual( PLAYER_1 );
    expect( togglePlayer( undefined ) ).toEqual( EMPTY );
  });

});