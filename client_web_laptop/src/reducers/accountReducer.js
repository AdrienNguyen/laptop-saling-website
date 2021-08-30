import { API_CALLING, LOGIN, SIGN_UP } from '../actionTypes';


const initialState = {
    apiCallDone : false,
    message : "",
    token : "",
    data : {},
    success : false
}
export default function(state = initialState, action) {
    switch(action.type) {
        case API_CALLING: 
            return {
                ...state,
                apiCallDone : false
            }
        case LOGIN:
            return {
                ...state,
                message : (action.payload.message ? action.payload.message : ""),
                token : (action.payload.token ? action.payload.token : ""),
                success : action.payload.success,
                data : action.payload.data,
                apiCallDone : true
            }
        case SIGN_UP:
            return {
                ...state,
                message : action.payload.message,
                success : action.payload.success,
                apiCallDone : true,
            }
        default:
            return state
    }
}