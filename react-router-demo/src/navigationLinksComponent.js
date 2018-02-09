import React from 'react';
import { NavLink } from 'react-router-dom';
const NavigationLinksComponent = () =>{
    return(

        <div className="list-group">
            <NavLink exact activeClassName="active" to="/" className="list-group-item">Home</NavLink>
            <NavLink activeClassName="active" to="/about" className="list-group-item">About</NavLink>
            <NavLink activeClassName="active" to="/content" className="list-group-item">Content</NavLink>
        </div>
        
    )
}
export default NavigationLinksComponent;