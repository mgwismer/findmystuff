import React, { Component } from 'react';
import RoomChoiceList from './room-choice-list';

export default class App extends Component {

  componentDidMount() {
    // let roomNames = [];
    // fetchHouse('rooms').then(rooms => {
    //   roomNames = rooms.map(room => room.roomName);
    //   this.setState({ rooms: roomNames });
    // });
  }

  render() {
    return (
      <div className="App">
        <RoomChoiceList
        />
      </div>
    );
  }
}

