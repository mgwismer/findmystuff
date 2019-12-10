import React, { Component } from 'react';
import { fetchHouse } from '../utils/house-server';
import  Room from './room';
import firebase from './firebase';
import { fetchRoomData } from '../api-utils/fetchData';

export default class RoomChoiceList extends Component {

  constructor(props) {
    super(props);
    this.state = ({ roomNames: [], roomsInHouse: [], toggle: false, subAreas: {} });
  }

  componentDidMount = async () => {
    const snapshot = await firebase.firestore().collection('thedomicile').get();
    const totalData = await fetchRoomData();
    console.log('mount', snapshot);
    let roomsInHouse = [];
    snapshot.forEach(doc => {
      console.log('for each mount', doc.data());
      const id = doc.id;
      const data = doc.data();
      const roomName = data.name;
      const roomSubAreas = data.subAreas;
      roomsInHouse.push(data.name);
      const { subAreas } = this.state;
      this.setState({
        subAreas: {
          ...subAreas,
          [roomName]: roomSubAreas, 
        }
      })
    });
    this.setState({ roomsInHouse })
    console.log('total data', totalData);
  }

  handleRoomsButtonClick = () => {
    const { roomsInHouse: roomNames, toggle } = this.state;
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
