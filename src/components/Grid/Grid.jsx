import React from 'react';
import './Grid.css';

export default class Grid extends React.Component {
  render() {
    return (
      <div className="grid">
        <div className="grid__column">
          <div className="grid__slot"></div>
          <div className="grid__slot"></div>
          <div className="grid__slot"></div>
          <div className="grid__slot"></div>
          <div className="grid__slot"></div>
          <div className="grid__slot"></div>
        </div>
        <div className="grid__column">
          <div className="grid__slot"></div>
          <div className="grid__slot"></div>
          <div className="grid__slot"></div>
          <div className="grid__slot"></div>
          <div className="grid__slot"></div>
          <div className="grid__slot"></div>
        </div>
        <div className="grid__column">
          <div className="grid__slot"></div>
          <div className="grid__slot"></div>
          <div className="grid__slot"></div>
          <div className="grid__slot"></div>
          <div className="grid__slot"></div>
          <div className="grid__slot"></div>
        </div>
        <div className="grid__column">
          <div className="grid__slot"></div>
          <div className="grid__slot"></div>
          <div className="grid__slot"></div>
          <div className="grid__slot"></div>
          <div className="grid__slot"></div>
          <div className="grid__slot"></div>
        </div>
        <div className="grid__column">
          <div className="grid__slot"></div>
          <div className="grid__slot"></div>
          <div className="grid__slot"></div>
          <div className="grid__slot"></div>
          <div className="grid__slot"></div>
          <div className="grid__slot"></div>
        </div>
        <div className="grid__column">
          <div className="grid__slot--player-2"></div>
          <div className="grid__slot"></div>
          <div className="grid__slot"></div>
          <div className="grid__slot"></div>
          <div className="grid__slot"></div>
          <div className="grid__slot"></div>
        </div>
        <div className="grid__column">
          <div className="grid__slot--player-1"></div>
          <div className="grid__slot"></div>
          <div className="grid__slot"></div>
          <div className="grid__slot"></div>
          <div className="grid__slot"></div>
          <div className="grid__slot"></div>
        </div>
      </div>
    )
  }

}