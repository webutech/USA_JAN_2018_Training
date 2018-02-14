import React from 'react';
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';
const App = () =>{
    return(
        <div>
            <h1>React-Redux-UL-POC</h1>
            <hr/>
            <UserList/>
            <hr/>
            
            <UserDetail/>
        </div>
    )
}

export default App;