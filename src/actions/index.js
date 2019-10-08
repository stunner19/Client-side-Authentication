import axios from 'axios';
import * as ActionTypes from './types';

const base_url = 'http://localhost:3000';

export const signinUserAction = () => ({
    type : ActionTypes.AUTH_USER,
});

export const signinUser = (email, password, callback) => (dispatch) => {
    axios.post(`${base_url}/users/signup`, {
        email : email,
        password : password
    })
    .then(response => {
        dispatch(signinUserAction())
        callback();
    })
    .catch()
};