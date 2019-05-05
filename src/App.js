import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import HomePage from './containers/HomePage/HomePage';
import VideoPage from './containers/VideoPage/VideoPage'

class App extends Component {
  
  render() {
    return (
      <>
        <HashRouter>
            <Route path='/' component={NavBar}/>
          <Switch>
            <Route path='/home' exact component={HomePage} />
            <Route path='/video/:videoID' exact component={VideoPage} />
          </Switch>
        </HashRouter>
      </>
    )
  }
} 
  
export default App;
