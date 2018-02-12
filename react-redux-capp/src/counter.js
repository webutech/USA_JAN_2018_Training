import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
   
    increment =()=>{        
            //count:this.state.count+1
            // create action and dispatch
            this.props.dispatch({type:"INCREMENT"});       
    }
    decrement =()=>{
       this.props.dispatch({type:"DECREMENT"});  
    }
    render() {
        return (
            <div className="counterContainer">
                <h1>Counter-React-App</h1>
                <div>
                    <button onClick={this.increment}>+</button>
                    <span>{this.props.count}</span>    
                    <button onClick={this.decrement}>-</button>
                </div>   
            </div>
        );
    }
}

// this will map the broadcasted store, to relevant props. 
function mapStateToProps(state){
    return {
        count:state.count
    }
}


// connect api will take mapStateToProps. 
// in your component along with props you will get dispatch method. 
// this will be used for dispatching the action
export default connect(mapStateToProps)(Counter);
