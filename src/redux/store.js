import { createStore } from 'redux';

import { RESET_GAME, PLAY_MOVE } from './actions';

import {
  PLAYER_1,
  createNewGrid,
  addTokenToColumn,
  togglePlayer,
  getColumnFreeSlotIndices
} from './GameUtils';

const initialState = () => ({
  grid: createNewGrid(),
  currentPlayer: PLAYER_1,
  columnFreeSlotIndices: [0, 0, 0, 0, 0, 0, 0]
})

const reducer = ( state = initialState(), action ) => {
  switch( action.type ) {
    case PLAY_MOVE: {
      const { column } = action.payload;
      const { currentPlayer } = state;
      const newGrid = addTokenToColumn( column, currentPlayer, state.grid );
      const newPlayer = togglePlayer( state.currentPlayer );
      const newColumnIndices = getColumnFreeSlotIndices( column, state.columnFreeSlotIndices, newGrid );
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