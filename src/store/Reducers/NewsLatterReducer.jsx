import {  ADD_NEWLATTER_REDUCER, GET_NEWLATTER_REDUCER, UPDATE_NEWLATTER_REDUCER, DELETE_NEWLATTER_REDUCER } from "../Contants";


export default function NewsLatterReducer(state = [], action) {
    let newState, index;
   //"reducer",action.type);
    switch (action.type) {
        case ADD_NEWLATTER_REDUCER:
            newState = state
            newState.push(action.payload)
           //"add_NEWLATTER",newState);
            return newState

        case GET_NEWLATTER_REDUCER:
           //"add_NEWLATTER",action.payload);

            return action.payload

        // case UPDATE_NEWLATTER_REDUCER:
        //     return action.payload

        // case UPDATE_NEWLATTER_REDUCER:
        //     newState = state
        //     index = state.findIndex(item => item.id === action.payload.id)
        //     newState[index].name = action.payload.name
        //     return newState

        case DELETE_NEWLATTER_REDUCER:
            newState = state.filter(item => item.id !== action.payload.id)
            return newState

        default:
            return state



    }
}