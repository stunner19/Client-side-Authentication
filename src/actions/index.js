import axios from 'axios';
import * as ActionTypes from './types';

const base_url = 'http://localhost:3000';

export const signinUserAction = () => ({
    type : ActionTypes.AUTH_USER,
});

export const signupUserAction = () => ({
    type : ActionTypes.AUTH_USER,
});

export const authenticationError = (response) => ({
    type : ActionTypes.AUTH_ERROR,
    payload : response
});

export const signinUser = (email, password, callback) => (dispatch) => {
    axios.post(`${base_url}/users/login`, {
        email : email,
        password : password
    })
    .then(response => {
        dispatch(signinUserAction());
        localStorage.setItem('token',response.data.token);
        callback();
    })
    .catch(() => {
        dispatch(authenticationError('Bad Login Info'));
    });
};

export const signoutUser = () => {
    localStorage.removeItem('token');
    return {
        type : ActionTypes.UNAUTH_USER
    }
};

export const signupUser = (email, password, callback) => (dispatch) => {
    axios.post(`${base_url}/users/signup`, {
        email : email,
        password : password
    })
    .then(response => {
        dispatch(signupUserAction());
        localStorage.setItem('token',response.data.token);
        callback();
    })
    .catch((response) => {
        dispatch(authenticationError('Bad Credentials'));
    });
};

export const fetchMessages = () => (dispatch) => {
    axios.get(base_url,{
        headers : { authorization : localStorage.getItem('token') }
    })
    .then((response) => console.log(response));
}