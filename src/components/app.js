import React, { Component } from 'react';
import { Switch, Route,withRouter } from 'react-router-dom';
import Header from './header';
import Signin from './auth/signin';
import { signinUser } from '../actions/index';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return{
    authenticated : state.auth.authenticated
  }
}

const mapDispatchToProps = (dispatch) => ({
  signinUser: (email,password,callback ) => dispatch(signinUser(email,password,callback))  
});

class App extends Component {
  render() {
    const { history } = this.props; 
    return (
      <Switch>
        <Route exact path = '/' component = {Header} />
        <Route path = '/signin' component = {() => <Signin history = {history} signinUser = {this.props.signinUser} /> } />
      </Switch>      
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));