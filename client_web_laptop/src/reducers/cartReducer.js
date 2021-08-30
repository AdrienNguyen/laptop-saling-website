import { ADD_TO_CART, REMOVE_FROM_CART } from '../actionTypes';

let initialState = {
    quantity : 0
}
const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_CART:
            return {
                ...state,
                quantity : action.payload
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                quantity : action.payload
            }
        default:
            return state
    }
}



export default cartReducer;