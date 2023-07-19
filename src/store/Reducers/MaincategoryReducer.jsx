import {  ADD_MAINCATEGORY_REDUCER, GET_MAINCATEGORY_REDUCER, UPDATE_MAINCATEGORY_REDUCER, DELETE_MAINCATEGORY_REDUCER } from "../Contants";


export default function maincategoryReducer(state = [], action) {
    let newState, index;
   //"reducer",action.type);
    switch (action.type) {
        case ADD_MAINCATEGORY_REDUCER:
            newState = state
            newState.push(action.payload)
           //"add_maincategory",newState);
            return newState

        case GET_MAINCATEGORY_REDUCER:
           //"add_maincategory",action.payload);

            return action.payload

        // case UPDATE_MAINCATEGORY_REDUCER:
        //     return action.payload

        case UPDATE_MAINCATEGORY_REDUCER:
            newState = state
            index = state.findIndex(item => item.id === action.payload.id)
            newState[index].name = action.payload.name
            return newState

        case DELETE_MAINCATEGORY_REDUCER:
            newState = state.filter(item => item.id !== action.payload.id)
            return newState

        default:
            return state



    }
}