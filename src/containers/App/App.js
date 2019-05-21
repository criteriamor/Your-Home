import React, { Component } from 'react';
import NewProject from '../NewProject/NewProject';
import SideDrawer from '../SideDrawer/SideDrawer';
import Room from '../Room/Room';

class App extends Component {

  render() {
    return (
      <div className="App" id='App'>
        <header className="App-header">
          <SideDrawer />
          <h1>YourHome</h1>
          <NewProject />
        </header>
      </div>
    );
  }
} 

export default App;
