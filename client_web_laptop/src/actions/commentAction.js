import { GET_COMMENTS, API_CALLING, ADD_COMMENT, UPDATE_COMMENT, DELETE_COMMENT } from '../actionTypes';
import axios from 'axios';

export const getAllComment = (id) => dispatch => {
    dispatch({
        type: API_CALLING
    });
    axios.get('https://laptop-adrien-nguyen.herokuapp.com/api/comment/laptop/' + id).then(function (res) {
        dispatch({
            type: GET_COMMENTS,
            payload: res.data
        });
    }).catch((error) => {
        console.log(error.response);
    });
}


export const addComment = (data) => dispatch => {
    dispatch({
        type: API_CALLING
    });
    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');
    axios.post('https://laptop-adrien-nguyen.herokuapp.com/api/comment', {
        content: data.content,
        laptop_id: data.laptop_id
    }).then(function (res) {
        dispatch({
            type: ADD_COMMENT,
            payload: res.data
        });
    }).catch((error) => {
        console.log(error.response)
    });
}

export const updateComment = (data) => dispatch => {
    dispatch({
        type: API_CALLING
    });
    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');
    axios.put('https://laptop-adrien-nguyen.herokuapp.com/api/comment/' + data.id, {
        id: data.id,
        content: data.content
    }).then(function (res) {
        dispatch({
            type: UPDATE_COMMENT,
            payload: res.data
        })
    }).catch(function (error) {
        console.log(error.response)
    });

}

export const deleteComment = (id) => dispatch => {
    dispatch({
        type: API_CALLING
    });

    axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('token');
    axios.delete('https://laptop-adrien-nguyen.herokuapp.com/api/comment/' + id).then(function (res) {
        dispatch({
            type: DELETE_COMMENT,
            payload: res.data
        })
    }).catch(function (error) {
        console.log(error.response)
    });
}