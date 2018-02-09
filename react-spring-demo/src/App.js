import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import HeaderComponent from './headerComponent';
import TodoListComponent from './component/todoListComponent';
import FooterComponent from './footerComponent';

class App extends Component {
  render() {
    return (
      <div id="container">
        <div id="header">
            <HeaderComponent/>
        </div>
        <div id="main">
          <TodoListComponent/>
        </div>
        <div id="footer">
           <FooterComponent createdBy='Pankaj Sharma'/>
        </div>

      </div>
    );
  }
}

export default App;
