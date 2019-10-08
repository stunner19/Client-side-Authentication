import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Header from './header';
import Signin from './auth/signin';
import { signinUser } from '../actions/index';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => ({
  signinUser: (email,password) => dispatch(signinUser(email,password))  
});

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path = '/' component = {Header} />
          <Route path = '/signin' component = {() => <Signin signinUser = {this.props.signinUser} /> } />
        </Switch>      
      </BrowserRouter>
    );
  }
}

export default connect(null,mapDispatchToProps)(App);