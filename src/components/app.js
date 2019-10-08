import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path = '/' component = {Header} />
        </Switch>      
      </BrowserRouter>
    );
  }
}
