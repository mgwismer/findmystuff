import React, { Component } from 'react';
import Authentication from './Authentication';
import { auth } from './firebase'
import '../assets/styles/App.css';
import '../assets/styles/index.css';

export default class App extends Component {
  state = {
    user: null,
  }
  unsubscribeFromAuth = null;
  componentDidMount = async () => {
    this.unsubscribeAuth = auth.onAuthStateChanged(user => {
      console.log('this user', user);
      this.setState({ user });
    })
  }
  render() {
    return (
      <div className="App-header">
        <Authentication user={this.state.user} />
      </div>
    );
  }
}

