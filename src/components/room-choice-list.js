import React, { Component } from 'react';
import { fetchHouse } from '../utils/house-server';
import  Room from './room';

export default class RoomChoiceList extends Component {

  constructor(props) {
    super(props);
    this.state = ({ roomNames: []});
  }


  handleRoomsButtonClick = () => {
    let roomNames = [];
    fetchHouse('rooms').then(rooms => {
      roomNames = rooms.map(room => room.roomName);
      this.setState({ roomNames });
    });
  };

  render() {
    const { roomNames } = this.state;
    const roomsInHouse = roomNames.map((roomName, index) => (
        <Room
          roomName={roomName}
          key={index}
        >
          <br/>
        </Room>
      )
    );
  
    return (
      <div className="App">
        <button className="App-header">
          <h2 onClick={this.handleRoomsButtonClick}>Welcome to Find My Stuff (click here)</h2>
        </button>
        <p className="App-intro">
          Then click on rooms
          <br/>
        </p>
        {roomsInHouse}
        </div>
    );
  }
}
