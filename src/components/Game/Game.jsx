import React from 'react';

import { Grid } from '../../components';

export default class Game extends React.Component {
  render() {
    return (
      <main>
        <h1>Four in a Row!</h1>
        <Grid />
      </main>
    )
  }
}