import React, { Component } from 'react';
import { findSubArea } from '../utils/house-server';
import firebase from './firebase';

export default class SubArea extends Component {

  constructor(props) {
    super(props);
    this.state = ({ 
        stuff: [],
        itemsFound: [],
    });
  }

  componentDidMount = async () => {
    const { roomName, subAreaName } = this.props;
    const areaSnapshot = await firebase.firestore().collection('thedomicile').doc(roomName).collection(subAreaName).get();
    areaSnapshot.forEach(doc => {
      const data = doc.data();
      console.log('data', data);
      const itemsFound = data['items found'];
      this.setState({ itemsFound });
    });
  }
  handleSubAreaButtonClick = (event) => {
    event.stopPropagation();
    const { itemsFound } = this.state;
    this.setState({ stuff: itemsFound });
};

  render() {
    const { subAreaName } = this.props;
    const { stuff = [] } = this.state;
    console.log('render in subarea', this.state);
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