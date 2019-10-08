import React, { Component } from 'react';
import { Switch, Route,withRouter } from 'react-router-dom';
import Header from './header';
import Signin from './auth/signin';
import { signinUser } from '../actions/index';
import { connect } from 'react-redux';
import Extra from './extra';
import SignOut from './auth/signout';

const mapStateToProps = (state) => {
  return{
    authenticated : state.auth.authenticated,
    error : state.auth.error
  }
}

const mapDispatchToProps = (dispatch) => ({
  signinUser: (email,password,callback ) => dispatch(signinUser(email,password,callback)),
  signoutUser: () => dispatch(signoutUser())
});

class App extends Component {
  render() {
    const { history } = this.props; 
    return (
      <React.Fragment>
        <Header authenticated = {this.props.authenticated} history = {history} />
        <Switch>
          <Route exact path = '/' component = {Extra} />
          <Route exact path = '/signin' component = {() => <Signin history = {history} signinUser = {this.props.signinUser} error = {this.props.error} /> } />
          <Route exact path = '/signout' component = {() => <SignOut signoutUser = {this.props.signoutUser} />} />
        </Switch>
      </React.Fragment>      
    );
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));