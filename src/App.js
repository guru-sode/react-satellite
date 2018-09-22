import React, { Component} from 'react';
import './App.css';
import People from './People';
import Position from './Position';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <h3 className='page-header'>Current Information From Space</h3>
        <People />
        <h3 className='page-header'>Current Data on the ISS:</h3>
        <Position />
      </div>
    );
  }
}

export default App;

