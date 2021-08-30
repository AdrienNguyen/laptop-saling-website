import { ADD_TO_CART, REMOVE_FROM_CART } from '../actionTypes';

export const addToCart = (quantity) => dispatch => {
    dispatch({
        type : ADD_TO_CART,
        payload : quantity
    })
};

export const removeFromCart = (quantity) => dispatch => {
    console.log(quantity);
    dispatch({
        type : REMOVE_FROM_CART,
        payload : quantity
    })
    console.log("vao day roi 0 nhe")
};