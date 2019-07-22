import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import HomePage from './containers/HomePage/HomePage';
import VideoPage from './containers/VideoPage/VideoPage';
import AddPage from './containers/AddPage/AddPage';

class App extends Component {
  
  render() {
    return (
      <>
        <HashRouter>
            <Route path='/' component={NavBar}/>
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/video' exact component={VideoPage} />
            <Route path='/add' exact component={AddPage} />
          </Switch>
        </HashRouter>
      </>
    )
  }
} 
  
export default App;
