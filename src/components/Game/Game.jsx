import React from 'react';
import { connect } from 'react-redux';

import './Game.css';
import { resetGame } from '../../redux/actions';
import { Grid } from '../../components';

export class Game extends React.Component {
  render() {
    return (
      <main>
        <h1>Four in a Row!</h1>
        <Grid />
        <button className="btn--reset" onClick={ this.props.resetGame }>New Game</button>
      </main>
    )
  }
}

const mapDispatchToProps = ( dispatch ) => ({
  resetGame: () => dispatch(resetGame())
})

export default connect( null, mapDispatchToProps )( Game ); 