import React, { Component } from 'react';
import { fetchHouse } from '../utils/house-server';
import RoomChoiceList from './room-choice-list';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = ({ rooms: []});
  }

  componentDidMount() {
    let roomNames = [];
    fetchHouse('rooms').then(rooms => {
      roomNames = rooms.map(room => room.roomName);
      this.setState({ rooms: roomNames });
    });
  }

  render() {
    console.log('App', this.state.rooms);
    return (
      <div className="App">
        <RoomChoiceList
          roomNames={this.state.rooms}
        />
      </div>
    );
  }
}

