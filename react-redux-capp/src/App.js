import React, { Component } from 'react';
import Counter from './counter';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

//Initial State
const initialState={
  count:0
}

//Reducer - state and action
// based on action state will be update by reducer
function counterReducer(state=initialState,action){
  switch(action.type){
    case 'INCREMENT':
    return{
      count:state.count+1
    };
    case 'DECREMENT':
    return{
      count:state.count-1
    };
    default:
      return state;
  }

	
  
}

// Redux store - that will require the reducer. 
const store=createStore(counterReducer);

// Provider will broadcast the store to other component. 
const App = () =>{
  return(

    <Provider store={store}>
      <Counter/>
    </Provider>
  )
}



export default App;
