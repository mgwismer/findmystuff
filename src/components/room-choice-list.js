import React, { Component } from 'react';

export default class RoomChoiceList extends Component {

  render() {
    const room = 'kitchen';
    const { roomNames } = this.props;
    console.log('choice list', roomNames);
    const roomItems = roomNames.map((roomName, index) => (
        <div>
          {roomName}
          <br/>
        </div>
      )
    )
    console.log('room items', roomItems);
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Find My Stuff</h2>
        </div>
        <p className="App-intro">
          NUMBER OF ROOMS
          <br/>
          {roomNames.length}
        </p>
        {roomItems}
        </div>
    );
  }
}
