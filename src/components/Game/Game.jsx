import React from 'react';
import { connect } from 'react-redux';

import './Game.css';
import { resetGame } from '../../redux/actions';
import { Grid } from '../../components';
import { EMPTY, PLAYER_1, PLAYER_2 } from '../../GameUtils';

export class Game extends React.Component {
  render() {
    const winners = {
      [PLAYER_1]: 'Red',
      [PLAYER_2]: 'Blue'
    }
    return (
      <main>
        <h1>Four in a Row!</h1>
        <p>
          {
            this.props.winner !== EMPTY ? `${ winners[ this.props.winner ] } wins!` : ''
          }
        </p>
        <Grid />
        <button className="btn--reset" onClick={ this.props.resetGame }>New Game</button>
      </main>
    )
  }
}

const mapStateToProps = ( state ) => ({
  winner: state.winner
});

const mapDispatchToProps = ( dispatch ) => ({
  resetGame: () => dispatch(resetGame())
})

export default connect( mapStateToProps, mapDispatchToProps )( Game ); 