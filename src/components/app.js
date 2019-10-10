import React, { Component } from 'react';
import { Switch, Route,withRouter } from 'react-router-dom';
import Header from './header';
import Signin from './auth/signin';
import { signinUser, signoutUser, signupUser, fetchMessages } from '../actions/index';
import { connect } from 'react-redux';
import Extra from './extra';
import SignOut from './auth/signout';
import SignUp from './auth/signup';
import Feature from './feature';
import RequireAuth from '../components/auth/require_auth';

const mapStateToProps = (state) => {
  return{
    authenticated : state.auth.authenticated,
    errorMessage : state.auth.errorMessage
  }
}

const mapDispatchToProps = (dispatch) => ({
  signinUser: (email,password,callback ) => dispatch(signinUser(email,password,callback)),
  signoutUser: () => dispatch(signoutUser()),
  signupUser: (email,password,callback ) => dispatch(signupUser(email,password,callback)),
  fetchMessages: () => dispatch(fetchMessages())
});

class App extends Component {
  render() {
    const { history } = this.props; 
    return (
      <React.Fragment>
        <Header authenticated = {this.props.authenticated} history = {history} />
        <Switch>
          <Route exact path = '/' component = {Extra} />
          <Route exact path = '/signin' component = {() => <Signin history = {history} signinUser = {this.props.signinUser} errorMessage = {this.props.errorMessage} /> } />
          <Route exact path = '/signout' component = {() => <SignOut signoutUser = {this.props.signoutUser} />} />
          <Route exact path = '/signup' component = {() => <SignUp history = {history} errorMessage = {this.props.errorMessage} signupUser = {this.props.signupUser} /> } />
          <Route exact path = '/feature' component = {RequireAuth(Feature)} />
        </Switch>
      </React.Fragment>      
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));