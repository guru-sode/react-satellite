import React, { Component } from 'react';

class Position extends Component {
    constructor(){
        super();
        this.state ={
            latitude:0,
            longitude:0,
            timestamp:0
        };
    }

    componentDidMount=()=>{
        fetch('http://api.open-notify.org/iss-now.json')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        });
    };
    render() { 
        return <h3>Hello</h3>
    }
}
 
export default Position;