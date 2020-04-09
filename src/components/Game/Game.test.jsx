import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';

import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import ConnectedGame, { Game } from './Game';
import { initialState } from '../../redux/store';
import { Grid } from '../../components';

describe('The Game component', () => {
  
  const mockStore = configureMockStore();
  const store = mockStore( initialState );

  // Not sure if this is correct
  test('It renders without crashing', () => {
    render(
      <Provider store={store}>
        <ConnectedGame />
      </Provider>
    );
  })

  test('It renders heading text', () => {
    const wrapper = shallow(
      <Game />
    );
    expect( wrapper.find('h1').text() ).toEqual('Four in a Row!');
  });

  test('It renders a grid component', () => {
    const wrapper = shallow(
      <Game />
    );
    expect( wrapper.contains(<Grid />) ).toEqual( true );
  });

  test('It renders a button component', () => {
    const wrapper = shallow(
      <Game />
    );
    expect( wrapper.find('button').text() ).toEqual('New Game');
  });

});