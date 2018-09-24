import React, { Component } from 'react';

class Position extends Component {
  constructor() {
    super();
    this.state = {
      latitude: 0,
      longitude: 0,
      timestamp: 0
    };
  }

  componentDidMount = () => {
    fetch('http://api.open-notify.org/iss-now.json')
      .then(response => response.json())
      .then(data => {
        const lat=data['iss_position']['latitude'];
        const lon=data['iss_position']['longitude'];
        const time=data['timestamp'];
        this.setState({
            latitude: lat,
            longitude: lon,
            timestamp: time
        });
      });
  };
  render() {
    return (
      <div className="position-table">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.latitude}</td>
              <td>{this.state.longitude}</td>
              <td>{this.state.timestamp}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Position;
