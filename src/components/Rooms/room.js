import React, { Component } from 'react';
import SubArea from './room-sub-area';

export default class Room extends Component {

  constructor(props) {
    super(props);
    this.state = ({ 
        stuff: [],
        roomSections: [],
    });
  }

  handleRoomButtonClick = async (event) => {
    event.stopPropagation();
    const { subAreas } = this.props;
    this.setState({
      roomSections: subAreas,
    });
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