import React, { Component } from 'react';
import RoomChoiceList from './room-choice-list';
import '../assets/styles/App.css';
import '../assets/styles/index.css';

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
      <div className="App-header">
        <RoomChoiceList
        />
      </div>
    );
  }
}

