import React, { Component } from 'react';
import './App.css';

class People extends Component {
    constructor(){
        super();
        this.state ={
            numOfPeople:0 ,
            name:[],
            craft:[]
        };
    }
    renderList(){
        const namesAndCraft=[];
        for(let i=0;i<this.state.name.length;i++){
             namesAndCraft.push((<li className='list-group-item' key={this.state.name[i]}>{this.state.name[i]}, craft:{this.state.craft[i]}</li>));
        }
        return namesAndCraft;
    }

    componentDidMount = () => {
        let _this=this;
        setInterval(()=>{
            fetch('http://api.open-notify.org/astros.json')
            .then((response) => response.json())
            .then((data) => {
                const name=[];
                const craft = [];
                data.people.forEach(object => {
                    craft.push(object.craft)
                    name.push(object.name)
                });
                _this.setState({
                    name,
                    craft,
                    numOfPeople:data["number"]
                });
            });
        },1000);
    };
    render() { 
                return (
            <div className='people'>
            <p>At this moment there are {this.state.numOfPeople} humans in space. They are:</p>
            <ul className='list-group'>{this.renderList()}</ul>
            </div>
        );
    }
}
 
export default People;