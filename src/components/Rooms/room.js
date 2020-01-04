import React, { Component } from 'react';
import SubArea from './room-sub-area';

export default class Room extends Component {

  constructor(props) {
    super(props);
    this.state = ({ 
        items: {},
        subAreas: {},
        roomSubAreas: [],
    });
  }

  handleRoomButtonClick = (event) => {
    event.stopPropagation();
    const { roomSubAreas, subAreas, items } = this.props;
    this.setState({
      roomSubAreas,
      subAreas,
      items,
    });
}

  render() {
    const { roomName, items } = this.props;
    const { roomSubAreas } = this.state;
    const roomSectionsComponent = roomSubAreas.map((subArea, index) => 
      <SubArea 
        subAreaName={subArea}
        items={items}
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