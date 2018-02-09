import React from 'react';
class ComponentLifeCycleDemo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
        console.log('---------Constructor Called-------------');
    }

    componentWillMount(){
        console.log('---------componentWillMount Called-------------');
    }
    render(){
        console.log('---------Render Called-------------');
        return(
            <div>
                <h2>Count :{this.state.count}</h2>
                <button>Increment</button>

            </div>
        )
    }

    componentDidMount(){
        console.log('---------componentDidMount Called-------------');
    }
}

export default ComponentLifeCycleDemo;