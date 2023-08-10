import {  ADD_CART_REDUCER, GET_CART_REDUCER, UPDATE_CART_REDUCER, DELETE_CART_REDUCER } from "../Contants";


export default function CartReducer(state = [], action) {
    let newState, index;
   //"reducer",action.type);
    switch (action.type) {
        case ADD_CART_REDUCER:
            newState = state
            newState.push(action.payload)
           //"add_CART",newState);
            return newState

        case GET_CART_REDUCER:
           //"add_CART",action.payload);
            console.log("cart reducer",action.payload);
            return action.payload

        // case UPDATE_CART_REDUCER:
        //     return action.payload

        case UPDATE_CART_REDUCER:
            newState = state
            index = state.findIndex(item => item.id === action.payload.id)
            newState[index].qty = action.payload.qty
            newState[index].total = action.payload.total
            return newState

        case DELETE_CART_REDUCER:
            newState = state.filter(item => item.id !== action.payload.id)
            return newState

        default:
            return state



    }
}