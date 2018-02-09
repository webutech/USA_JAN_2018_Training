import React from 'react';
import { BrowserRouter as Router, Route ,NavLink } from 'react-router-dom'; 
import ContentDetails from './contentDetails';
const ContentComponent = () =>{
    return(
        <div>
        <h1>Content Page</h1>
            <div>
                <NavLink className="list-group-item" activeClassName="active" exact to="/content/city" >City</NavLink>
                <NavLink className="list-group-item" activeClassName="active" exact to="/content/sports" >Sports</NavLink>
                <Route path="/content/:contentName" component={ContentDetails}/>
               
            </div>
        </div>
    )
}

export default ContentComponent;