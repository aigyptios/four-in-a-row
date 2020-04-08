import { createStore } from 'redux';

import { RESET_GAME, PLAY_MOVE } from './actions';

import * as GameUtils from './GameUtils';

const initialState = {
  grid: GameUtils.createNewGrid(),
  currentPlayer: GameUtils.PLAYER_1,
  columnFreeSlotIndices: [0, 0, 0, 0, 0, 0, 0]
}

const reducer = ( state, action ) => {
  switch( action.type ) {
    case PLAY_MOVE: {
      return {
        ...state,
      };
    }
    case RESET_GAME: {
      return {
        ...state,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}

console.log( initialState );

export default createStore( reducer );