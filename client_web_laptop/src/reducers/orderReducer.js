import { API_CALLING, ADD_ORDER } from '../actionTypes';

let initialState = {
    apiCallDone : false
}

const orderReducer = (state = initialState, action) => {
    switch(action.type) {
        case API_CALLING:
            return {
                ...state,
                apiCallDone : false
            }
        case ADD_ORDER: 
            return {
                ...state,
                apiCallDone : true,
                success : action.payload.success
            }
        default:
            return state
    }
}

export default orderReducer;