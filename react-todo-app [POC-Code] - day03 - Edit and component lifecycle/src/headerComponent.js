import React from 'react';
import LogoComponent from './logoComponent';

class HeaderComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            headerText:'TODO-APP Using REACTJS'
        };

    }
    render(){
        return(
            <div>
                <h1>{this.state.headerText}</h1>
                <LogoComponent logo="TODO-APP"/>
            </div>
        );
    }
}

export default HeaderComponent;