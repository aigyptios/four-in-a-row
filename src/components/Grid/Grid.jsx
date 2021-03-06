import React from 'react';
import { connect } from 'react-redux';

import './Grid.css';
import { playMove } from '../../redux/actions';
import { PLAYER_1, PLAYER_2 , EMPTY } from '../../GameUtils';

export class Grid extends React.Component {

  handleColumnClick( index ) {
    const column = this.props.grid[ index ];
    if ( column.indexOf( EMPTY ) > -1 && this.props.winner === EMPTY ) {
      this.props.playMove( index );
    }
  }

  render() {
    const { grid, currentPlayer, winner } = this.props;
    return (
      <div className={(
        winner === EMPTY ? 
        currentPlayer === PLAYER_1 ? 'grid--player-1' : 
        currentPlayer === PLAYER_2 ? 'grid--player-2' : 'grid' : 'grid'
      )}>
        {
          grid.map(( column, index ) => (
            <div className='grid__column' key={ index } onClick={ this.handleColumnClick.bind( this, index ) }>
              {
                column.map(( slot, row ) => (
                  <div key={ row } className={
                    slot === PLAYER_1 ? 'grid__slot--player-1' : 
                    slot === PLAYER_2 ? 'grid__slot--player-2' : 
                    'grid__slot'
                  }></div>
                ))
              }
            </div>
          ))
        }
      </div>
    )
  }

}

const mapStateToProps = ( state ) => ({
  grid: state.grid,
  currentPlayer: state.currentPlayer,
  winner: state.winner
});

const mapDispatchToProps = ( dispatch ) => ({
  playMove: ( index ) => dispatch( playMove( index ) )
});

export default connect( mapStateToProps, mapDispatchToProps )( Grid );