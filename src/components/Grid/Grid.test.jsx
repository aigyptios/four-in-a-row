import React from 'react';
import { shallow } from 'enzyme';

import { Grid } from './Grid';
import { initialState } from '../../redux/store';

describe('The Grid component', () => {

  test('It renders without breaking', () => {
    const { grid, currentPlayer } = initialState();
    const props = { grid, currentPlayer };
    shallow(
      <Grid {...props}/>
    );
  });

  test('It renders a grid with columns', () => {
    const { grid, currentPlayer } = initialState();
    const props = { grid, currentPlayer };
    const wrapper = shallow(
      <Grid {...props}/>
    );
    expect( 
      wrapper.find( '.grid--player-1' ).exists() ||
      wrapper.find( '.grid--player-2' ).exists() ||
      wrapper.find( '.grid' ).exists()
     ).toEqual( true );
  });

});