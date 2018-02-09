import React from 'react';
const ContentDetails = (props) =>{
    return(
        <div>
            {props.match.params.contentName 
            ?<div><img src={'http://lorempixel.com/400/200/'+props.match.params.contentName+'/1/'}/></div>
            :null
            }</div>
    )
}

export default ContentDetails;