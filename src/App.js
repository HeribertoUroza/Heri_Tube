import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar'
import HomePage from './containers/HomePage/HomePage'

class App extends Component {
  
  render() {
    return (
      <>
        <HashRouter>
            <Route path='/' component={NavBar}/>
          <Switch>
            <Route path='/home' exact component={HomePage} />
          </Switch>
        </HashRouter>
      </>
    )
  }
} 
  
export default App;
