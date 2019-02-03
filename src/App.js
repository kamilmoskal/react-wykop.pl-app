import React, { Component } from 'react';
import HeaderNav from './containers/HeaderNav/HeaderNav';
import Home from './containers/Home/Home'


class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderNav />
        <Home />
      </div>
    );
  }
}

export default App;
