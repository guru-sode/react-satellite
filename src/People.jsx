import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class People extends Component {
    constructor(props){
        super(props);
        this.props.FETCH_NAMES;
    }

    renderList(){
        const namesAndCraft=[];
        for(let i=0;i<this.props.name.length;i++){
             namesAndCraft.push((<li className='list-group-item' key={this.props.name[i]}>{this.props.name[i]}, craft:{this.props.craft[i]}</li>));
        }
        return namesAndCraft;
    }

    componentDidMount = () => {
        setInterval(()=>{
            // this.props.FETCH_NAMES;
            this.setState({});
        },1000);
    };
    render() { 
                return (
            <div className='people'>
            <p>At this moment there are {this.props.numOfPeople} humans in space. They are:</p>
            <ul className='list-group'>{this.renderList()}</ul>
            </div>
        );
    }
}
 
const mapStateToProps = state => {
    return {
      numOfPeople:state.numOfPeople,
      name: state.name,
      craft:state.craft
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      FETCH_NAMES: dispatch({ type: 'FETCH_NAMES' }),
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(People);