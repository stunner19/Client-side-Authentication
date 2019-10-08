import axios from 'axios';

const base_url = 'http://localhost:3000';

export const signinUser = (email, password) => (dispatch) => {
    axios.post(`${base_url}/users/signup`, {
        email : email,
        password : password
    });
};