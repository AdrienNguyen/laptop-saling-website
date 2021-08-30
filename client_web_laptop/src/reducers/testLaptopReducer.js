import { API_CALLING, GET_LAPTOP_TEST } from '../actionTypes';

const initialState = {
    laptop : {},
    apiCallDone : false
}

const testLaptopReducer = (state = initialState,  action) => {
    switch(action.type) {
        case API_CALLING:
            return {
                ...state,
                apiCallDone : false
            }
        case GET_LAPTOP_TEST:
            return {
                ...state,
                success : action.payload.success,
                laptop : action.payload.data,
                apiCallDone : true
            }
        default:
            return state
    }
}

export default testLaptopReducer;