import axios from 'axios';
import * as ActionTypes from './types';

const base_url = 'http://localhost:3000';

export const signinUserAction = () => ({
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