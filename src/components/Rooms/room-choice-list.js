import React, { Component } from 'react';
import  Room from './room';
import { fetchRoomData } from '../../api-utils/fetchData';

export default class RoomChoiceList extends Component {

  constructor(props) {
    super(props);
    this.state = ({ rooms: [], toggle: false, subAreas: [], items: [], roomNames: [] });
  }

  componentDidMount = async () => {
    const totalData = await fetchRoomData();
    console.log('total data', totalData)
    this.setState({ ...this.state, ...totalData });
  }

  handleRoomsButtonClick = () => {
    const { rooms, toggle } = this.state;
    const roomNames = rooms.map(room => room.name);
    if (!toggle) {
      this.setState({ roomNames, toggle: true });
    } else {
      this.setState({ roomNames: [], toggle: false });
    }
  };

  render() {
    const { roomNames, subAreas } = this.state;
    const roomsInHouse = roomNames.map((roomName, index) => (
        <Room
          roomName={roomName}
          key={index}
          subAreas={subAreas[roomName]}
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
