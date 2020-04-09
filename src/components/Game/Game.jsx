import React from 'react';
import { connect } from 'react-redux';

import { resetGame } from '../../redux/actions';

import { Grid } from '../../components';

class Game extends React.Component {
  render() {
    return (
      <main>
        <h1>Four in a Row!</h1>
        <div>
          <button onClick={ this.props.resetGame }>Reset</button>
          Current Player: { this.props.currentPlayer }
        </div>
        <Grid />
      </main>
    )
  }
}

const mapStateToProps = ( state ) => ({
  currentPlayer: state.currentPlayer
});

const mapDispatchToProps = ( dispatch ) => ({
  resetGame: () => dispatch(resetGame())
})

export default connect( mapStateToProps, mapDispatchToProps )( Game ); 