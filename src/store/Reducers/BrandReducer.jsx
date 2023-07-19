import {  ADD_BRAND_REDUCER, GET_BRAND_REDUCER, UPDATE_BRAND_REDUCER, DELETE_BRAND_REDUCER } from "../Contants";


export default function BrandReducer(state = [], action) {
    let newState, index;
   //"reducer",action.type);
    switch (action.type) {
        case ADD_BRAND_REDUCER:
            newState = state
            newState.push(action.payload)
           //"add_BRAND",newState);
            return newState

        case GET_BRAND_REDUCER:
           //"add_BRAND",action.payload);

            return action.payload

        // case UPDATE_BRAND_REDUCER:
        //     return action.payload

        case UPDATE_BRAND_REDUCER:
            newState = state
            index = state.findIndex(item => item.id === action.payload.id)
            newState[index].name = action.payload.name
            return newState

        case DELETE_BRAND_REDUCER:
            newState = state.filter(item => item.id !== action.payload.id)
            return newState

        default:
            return state



    }
}