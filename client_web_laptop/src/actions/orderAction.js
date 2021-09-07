import { ADD_ORDER, API_CALLING } from '../actionTypes';
import axios from 'axios';

export const addOrder = (data) => dispatch => {
    dispatch({
        type: API_CALLING
    })
    console.log("vao day")
    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');
    axios.post('https://laptop-adrien-nguyen.herokuapp.com/api/order', {
        name: data.name,
        address: data.address,
        phone: data.phone,
        laptops: data.laptops
    }).then(function (res) {
        dispatch({
            type: ADD_ORDER,
            payload: res.data
        })
    }).catch(function (error) {
        console.log(error.response)
    })
}
