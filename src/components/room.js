import React, { Component } from 'react';
import { fetchRoom } from '../utils/house-server';
import SubArea from './room-sub-area';

export default class Room extends Component {

  constructor(props) {
    super(props);
    this.state = ({ 
        stuff: [],
        roomSections: [],
    });
  }

  handleRoomButtonClick = (event) => {
    event.stopPropagation();
    const { roomName } = this.props;
    const { roomSections } = this.state;
    let roomSectionsFromServer = [];
    if (roomSections && roomSections.length) {
      this.setState({ roomSections: [] });
    } else {
      fetchRoom(roomName).then(subAreas => {
        roomSectionsFromServer = subAreas.map(area => area.subAreaName);
        this.setState({ roomSections: roomSectionsFromServer });
    });
  }
}

  render() {
    const { roomName } = this.props;
    const { roomSections } = this.state;
    const roomSectionsComponent = roomSections.map((roomSection, index) => 
      <SubArea 
        roomName={roomName}
        subAreaName={roomSection}
        key={index}
      />
    )
  
    return (
      <div className="room-header"
        onClick={this.handleRoomButtonClick}>
          {roomName}
          <div className='room-sections'>
            {roomSectionsComponent}
          </div>
      </div>
    );
  }
}