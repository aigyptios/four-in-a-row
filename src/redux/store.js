import { createStore } from 'redux';

import { RESET_GAME, PLAY_MOVE } from './actions';

import {
  PLAYER_1,
  createNewGrid,
  addTokenToColumn,
  togglePlayer
} from './GameUtils';

const initialState = () => ({
  grid: createNewGrid(),
  currentPlayer: PLAYER_1
})

const reducer = ( state = initialState(), action ) => {
  switch( action.type ) {
    case PLAY_MOVE: {
      const { column } = action.payload;
      const { currentPlayer } = state;
      const newGrid = addTokenToColumn( column, currentPlayer, state.grid );
      const newPlayer = togglePlayer( state.currentPlayer );
      return {
        ...state,
        currentPlayer: newPlayer,
        grid: newGrid
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