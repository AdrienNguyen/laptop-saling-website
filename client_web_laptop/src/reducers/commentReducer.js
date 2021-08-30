import { API_CALLING, GET_COMMENTS, ADD_COMMENT, UPDATE_COMMENT, DELETE_COMMENT } from '../actionTypes';

const initialState = {
    comments : [],
    apiCallDone : false
}

const commentReducer = (state = initialState, action) =>  {
    switch(action.type) {
        case API_CALLING: 
            return {
                ...state,
                apiCallDone : false
            }
        case GET_COMMENTS: 
            return {
                ...state,
                comments : action.payload.data.rows,
                apiCallDone : false,
            } 
        case ADD_COMMENT:
            return {
                ...state,
                apiCallDone : true,
            }
        case UPDATE_COMMENT:
            return {
                ...state,
                apiCallDone : true,
            }
        case DELETE_COMMENT: 
            return {
                ...state,
                apiCallDone : true
            }
        default: 
            return state;
    }
}

export default commentReducer;