import { createStore } from 'redux';

import { RESET_GAME, PLAY_MOVE } from './actions';

import {
  PLAYER_1,
  EMPTY,
  createNewGrid,
  addTokenToColumn,
  togglePlayer,
  gridWinner
} from '../GameUtils';

export const initialState = {
  grid: createNewGrid(),
  currentPlayer: PLAYER_1,
  winner: EMPTY
};

export const reducer = ( state = { ...initialState }, action ) => {
  switch( action.type ) {
    case PLAY_MOVE: {
      const { column } = action.payload;
      const { currentPlayer } = state;
      const newGrid = addTokenToColumn( column, currentPlayer, state.grid );
      const winner = gridWinner( newGrid, column );
      const newPlayer = togglePlayer( state.currentPlayer );
      return {
        ...state,
        currentPlayer: newPlayer,
        grid: newGrid,
        winner
      };
    }
    case RESET_GAME: {
      return { ...initialState };
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