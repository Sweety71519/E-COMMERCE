import {  ADD_CHECKOUT_REDUCER, GET_CHECKOUT_REDUCER, UPDATE_CHECKOUT_REDUCER, DELETE_CHECKOUT_REDUCER } from "../Contants";


export default function CheckOutReducer(state = [], action) {
    let newState, index;
   //"reducer",action.type);
    switch (action.type) {
        case ADD_CHECKOUT_REDUCER:
            newState = state
            newState.push(action.payload)
           //"add_CHECKOUT",newState);
            return newState

        case GET_CHECKOUT_REDUCER:
           //"add_CHECKOUT",action.payload);

            return action.payload

        // case UPDATE_CHECKOUT_REDUCER:
        //     return action.payload

        case UPDATE_CHECKOUT_REDUCER:
            newState = state
            index = state.findIndex(item => item.id === action.payload.id)
            newState[index].name = action.payload.name
            return newState

        case DELETE_CHECKOUT_REDUCER:
            newState = state.filter(item => item.id !== action.payload.id)
            return newState

        default:
            return state



    }
}