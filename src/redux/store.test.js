import { reducer, initialState } from './store';
import { RESET_GAME, PLAY_MOVE } from './actions';
import { PLAYER_1, PLAYER_2, EMPTY } from '../GameUtils';

describe('The store', () => {

  test('The initial state creation function should return an initial state', () => {
    const state = initialState();
    expect( state.grid ).toHaveLength(7);
    expect( state.grid[0] ).toHaveLength(6);
    expect( state.currentPlayer ).toEqual( PLAYER_1 );
  });

  test('The reducer should return initial state', () => {
    expect( reducer( undefined, {} ) ).toEqual( initialState() );
  });

  test('The reducer should handle \'PLAY_MOVE\' actions on initial state', () => {
    const stateBefore = initialState();
    const column = 2;
    const action = {
      type: PLAY_MOVE,
      payload: {
        column
      }
    }
    const state = reducer( stateBefore, action);
    expect( state.grid[ column ] ).toContain( PLAYER_1 );
    expect( state.grid[ column ] ).not.toContain( PLAYER_2 );
    expect( state.grid[ column ].indexOf( EMPTY ) ).toBe( 1 );
  });

  test('The reducer should handle \'PLAY_MOVE\' actions on grid with tokens already on it', () => {
    const stateBefore = initialState();
    const column = 2;
    const action = {
      type: PLAY_MOVE,
      payload: {
        column
      }
    }
    let state = reducer( stateBefore, action);
    expect( state.grid[ column ] ).toContain( PLAYER_1 );
    expect( state.grid[ column ].indexOf( EMPTY ) ).toBe( 1 );
    state = reducer( state, action );
    expect( state.grid[ column ] ).toContain( PLAYER_2 );
    expect( state.grid[ column ].indexOf( EMPTY ) ).toBe( 2 );
  });

  test('The reducer should handle \'RESET_GAME\' actions', () => {
    const stateBefore = initialState();
    const column = 2;
    const playMoveAction = {
      type: PLAY_MOVE,
      payload: {
        column
      }
    }
    let state = reducer( stateBefore, playMoveAction);
    expect( state.grid[ column ] ).toContain( PLAYER_1 );
    expect( state.grid[ column ].indexOf( EMPTY ) ).toBe( 1 );
    state = reducer( state, playMoveAction );
    expect( state.grid[ column ] ).toContain( PLAYER_2 );
    expect( state.grid[ column ].indexOf( EMPTY ) ).toBe( 2 );
    const resetGameAction = {
      type: RESET_GAME
    };
    state = reducer( state, resetGameAction );
    expect( state ).toEqual( stateBefore );
  });
});