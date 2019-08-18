import React from 'react';
import Home from './components/index/home';
import SideBar from './components/sideBar/aside'
export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Home /> */}
        <SideBar />

      </div>

    );
  }
}
