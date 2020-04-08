import { createStore } from 'redux';

import { RESET_GAME, PLAY_MOVE } from './actions';

import * as GameUtils from './GameUtils';

const initialState = () => ({
  grid: GameUtils.createNewGrid(),
  currentPlayer: GameUtils.PLAYER_1,
  columnFreeSlotIndices: [0, 0, 0, 0, 0, 0, 0]
})

const reducer = ( state = initialState(), action ) => {
  switch( action.type ) {
    case PLAY_MOVE: {
      const { player, column } = action.payload;
      const newGrid = GameUtils.addTokenToColumn( column, player, state.grid );
      const newPlayer = GameUtils.togglePlayer( state.currentPlayer );
      const newColumnIndices = GameUtils.getColumnFreeSlotIndices( column, state.columnFreeSlotIndices, newGrid );
      return {
        ...state,
        currentPlayer: newPlayer,
        grid: newGrid,
        columnFreeSlotIndices: newColumnIndices
      };
    }
    case RESET_GAME: {
      return initialState();
    }
    default: {
      return {
        ...state,
      };
    }
  }
}

export default createStore( 
  reducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);