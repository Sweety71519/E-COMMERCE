import {  ADD_SUBCATEGORY_REDUCER, GET_SUBCATEGORY_REDUCER, UPDATE_SUBCATEGORY_REDUCER, DELETE_SUBCATEGORY_REDUCER } from "../Contants";


export default function SubcategoryReducer(state = [], action) {
    let newState, index;
   //"reducer",action.type);
    switch (action.type) {
        case ADD_SUBCATEGORY_REDUCER:
            newState = state
            newState.push(action.payload)
           //"add_SUBCATEGORY",newState);
            return newState

        case GET_SUBCATEGORY_REDUCER:
           //"add_SUBCATEGORY",action.payload);

            return action.payload

        // case UPDATE_SUBCATEGORY_REDUCER:
        //     return action.payload

        case UPDATE_SUBCATEGORY_REDUCER:
            newState = state
            index = state.findIndex(item => item.id === action.payload.id)
            newState[index].name = action.payload.name
            return newState

        case DELETE_SUBCATEGORY_REDUCER:
            newState = state.filter(item => item.id !== action.payload.id)
            return newState

        default:
            return state



    }
}