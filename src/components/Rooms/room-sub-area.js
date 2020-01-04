import React, { Component } from 'react';
import { findSubArea } from '../../utils/house-server';

export default class SubArea extends Component {

  constructor(props) {
    super(props);
    this.state = ({ 
        stuff: [],
    });
  }

  handleSubAreaButtonClick = (event) => {
    event.stopPropagation();
    const { items, subAreaName } = this.props;
    const itemArray = Object.values(items).filter(item => item.subArea === subAreaName).map(item => item.name);

    this.setState({
      stuff: itemArray,
    })
};

  render() {
    const { subAreaName } = this.props;
    const { stuff } = this.state;
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