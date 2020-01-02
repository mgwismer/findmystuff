import React, { Component } from 'react';
import SubArea from './room-sub-area';

export default class Room extends Component {

  constructor(props) {
    super(props);
    this.state = ({ 
        items: [],
        subAreas: [],
        roomSubAreas: [],
    });
  }

  handleRoomButtonClick = (event) => {
    console.log('room click', event, this.props)
    event.stopPropagation();
    const { roomSubAreas, subAreas } = this.props;
    this.setState({
      roomSubAreas,
      subAreas,
    });
}

  render() {
    const { roomName } = this.props;
    const { roomSubAreas, subAreas } = this.state;
    const roomSectionsComponent = roomSubAreas.map((subArea, index) => 
      <SubArea 
        subAreaName={subArea}
        subAreas={subAreas}
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