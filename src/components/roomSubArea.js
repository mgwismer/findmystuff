import React, { Component } from 'react';
import { fetchRoom } from '../utils/house-server';

export default class Room extends Component {

  constructor(props) {
    super(props);
    this.state = ({ 
        stuff: [],
    });
  }

//   handleRoomButtonClick = () => {
//     const { roomName } = this.props;
//     let roomSections = [];
//     fetchRoom(roomName).then(subAreas => {
//       console.log('subAreas', subAreas);
//       roomSections = subAreas.map(area => area.subAreaName);
//       this.setState({ roomSections });
//   });
// }

  render() {
    return (
      <div className="room-section-header"
        onClick={this.handleRoomButtonClick}>
          {roomName}
          <div className='section-stuff'>
            {roomSections}
          </div>
      </div>
    );
  }
}