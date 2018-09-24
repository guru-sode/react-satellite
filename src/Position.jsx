import React, { Component } from 'react';

class Position extends Component {
  constructor() {
    super();
    this.state = {
      latitude: [],
      longitude: [],
      timestamp: []
    };
  }
    componentDidMount = () => {
      let lat=[];
      let lon=[];
      let time=[];
      let _this =this;
      setInterval(()=>{
          console.log(this.state);
          fetch('http://api.open-notify.org/iss-now.json')
          .then(response => response.json())
          .then(data => {
             lat.push(data['iss_position']['latitude']);
             lon.push(data['iss_position']['longitude']);
             time.push(data['timestamp']);
             _this.setState({
              latitude: lat,
              longitude: lon,
              timestamp: time
          }); 
         });
      },5000)
          
    };

    renderTable(){
      const pos=[];
      for(let i=0;i<this.state.latitude.length;i++){
        pos.push(<tr></tr>);
        pos.push(<td key='this.state.latitude[i]'>{this.state.latitude[i]}</td>);
        pos.push(<td key='this.state.longitude[i]'>{this.state.longitude[i]}</td>);
        pos.push(<td key='this.state.timestamp[i]'>{this.state.timestamp[i]}</td>);
      }
      return pos;
    }


  render() {
    return (
      <div className="position-table">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>Timestamp(Unix)</th>
            </tr>
          </thead>
          {/* <tbody> */}
            {this.renderTable()}
          {/* </tbody> */}
        </table>
      </div>
    );
  }
}

export default Position;
