import React from 'react';
import { Players } from './../api/players';

export default class AddPlayer extends React.Component {
  handleSubmit(e) {
    let playerName = e.target.playerName.value;
    e.preventDefault();

    if (playerName) {
      // Clear out the value
      e.target.playerName.value = '';
      // insert() is a method that takes an object/partial document.
      // The document is partial because it doesn't have a unique id assigned yet
      Players.insert({
        name: playerName,
        score: 0
      });
    }
  }
  render() {
    return (
      <div className="item">
        <form className="form" onSubmit={this.handleSubmit.bind(this)}>
          <input
            className="form__input"
            type="text"
            name="playerName"
            placeholder="Player name"
          />
          <button className="button">Add Player</button>
        </form>
      </div>
    );
  }
}
