import React, { Component } from 'react';
import { findSubArea } from '../utils/house-server';

export default class SubArea extends Component {

  constructor(props) {
    super(props);
    this.state = ({ 
        stuff: [],
    });
  }

  handleSubAreaButtonClick = (event) => {
    event.stopPropagation();
    const { roomName, subAreaName } = this.props;
    findSubArea(roomName, subAreaName).then(subArea => {
        this.setState({ stuff: subArea.itemsFound });
        console.log('returned subArea', subArea, subArea.itemsFound);
    });
};

  render() {
    const { subAreaName } = this.props;
    const { stuff } = this.state;
    console.log('render in subarea', stuff);
    const stuffComponent = stuff.map(item => 
        <div className='section-stuff'>
            {item}
            <br/>
        </div>
    );
    return (
        <div
            className="room-subarea-header"
            onClick={this.handleSubAreaButtonClick}
        >
            {subAreaName}
            {stuffComponent}
        </div>
    );
  }
}