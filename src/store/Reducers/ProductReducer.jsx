import {  ADD_PRODUCT_REDUCER, GET_PRODUCT_REDUCER, UPDATE_PRODUCT_REDUCER, DELETE_PRODUCT_REDUCER } from "../Contants";


export default function ProductReducer(state = [], action) {
    let newState, index;
    console.log("reducer",action.type);
    switch (action.type) {
        case ADD_PRODUCT_REDUCER:
            newState = state
            newState.push(action.payload)
            console.log("add_PRODUCT",newState);
            return newState

        case GET_PRODUCT_REDUCER:
            console.log("add_PRODUCT",action.payload);

            return action.payload

        // case UPDATE_PRODUCT_REDUCER:
        //     return action.payload

        case UPDATE_PRODUCT_REDUCER:
            newState = state
            index = state.findIndex(item => item.id === action.payload.id)
            newState[index].name = action.payload.name
            return newState

        case DELETE_PRODUCT_REDUCER:
            newState = state.filter(item => item.id !== action.payload.id)
            return newState

        default:
            return state



    }
}