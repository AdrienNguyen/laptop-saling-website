import axios from 'axios';
import { LOGIN, API_CALLING, SIGN_UP } from '../actionTypes';

export const login = (data) => dispatch => {
    dispatch({
        type: API_CALLING
    });
    axios.post('https://laptop-adrien-nguyen.herokuapp.com/api/user/signIn', data).then(function (res) {
        console.log(res.data)
        dispatch({
            type: LOGIN,
            payload: res.data
        });
    }).catch(function (error) {
        console.log(error.response);
    });
}

export const signUp = (data) => dispatch => {
    dispatch({
        type: API_CALLING
    });
    axios.post('https://laptop-adrien-nguyen.herokuapp.com/api/user/signUp', data).then(function (res) {
        console.log(res.data)
        dispatch({
            type: SIGN_UP,
            payload: res.data
        })
    }).catch(function (error) {
        console.log(error.response);
    });
}