import React, { Component } from 'react';
import { fetchHouse } from '../utils/house-server';

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
          <h2 onClick={this.handleRoomsButtonClick}>Welcome to Find My Stuff</h2>
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
