import React, { Component } from 'react';

class Position extends Component {
  constructor() {
    super();
    this.state = {
      latitude: [],
      longitude: [],
      timestamp: [],
      dateAndTime:[]
    };
  }
    componentDidMount = () => {
      let lat=[];
      let lon=[];
      let time=[];
      let date=[];
      let _this =this;
      setInterval(()=>{
          fetch('http://api.open-notify.org/iss-now.json')
          .then(response => response.json())
          .then(data => {
             lat.push(data['iss_position']['latitude']);
             lon.push(data['iss_position']['longitude']);
             time.push(data['timestamp']);
             let dt=new Date(data['timestamp']);
             date.push(dt.toDateString());
             _this.setState({
              latitude: lat,
              longitude: lon,
              timestamp: time,
              dateAndTime: date
          }); 
         });
      },5000)
          
    };


    renderTable(){
      const pos=[];
      for(let i=0;i<this.state.latitude.length;i++){
        pos.push(<tr key={i}><td key={this.state.latitude[i]}>{this.state.latitude[i]}</td><td key={this.state.longitude[i]}>{this.state.longitude[i]}</td><td key={this.state.timestamp[i]}>{this.state.timestamp[i]}</td>
        <td key={this.state.dateAndTime[i]}>{this.state.dateAndTime[i]}</td></tr>);
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
              <th>Date</th>
            </tr>
        </thead>
            <tbody>
              {this.renderTable()}
            </tbody>
        </table>
      </div>
    );
  }
}

export default Position;
