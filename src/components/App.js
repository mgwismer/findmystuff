import React, { Component } from 'react';
import RoomChoiceList from './room-choice-list';
import '../assets/styles/App.css';
import '../assets/styles/index.css';
import SearchInput from './search-input';

export default class App extends Component {

  render() {
    return (
      <div className="App-header">
        <RoomChoiceList
        />
        <SearchInput
        />
      </div>
    );
  }
}

