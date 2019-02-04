import React, { Component } from 'react';
import HeaderNav from './containers/HeaderNav/HeaderNav';
import Home from './containers/Home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <HeaderNav />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/wykopalisko/" component={Home}/>
            <Route path="/hity/" component={Home}/>
            <Route path="/mikroblog/" component={Home}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
