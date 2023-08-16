import {  ADD_CONTACT_REDUCER, GET_CONTACT_REDUCER, UPDATE_CONTACT_REDUCER, DELETE_CONTACT_REDUCER } from "../Contants";


export default function ContactReducer(state = [], action) {
    let newState, index;
   //"reducer",action.type);
    switch (action.type) {
        case ADD_CONTACT_REDUCER:
            newState = state
            newState.push(action.payload)
           //"add_CONTACT",newState);
            return newState

        case GET_CONTACT_REDUCER:
           //"add_CONTACT",action.payload);

            return action.payload

        // case UPDATE_CONTACT_REDUCER:
        //     return action.payload

        case UPDATE_CONTACT_REDUCER:
            newState = state
            index = state.findIndex(item => item.id === action.payload.id)
            newState[index].status = action.payload.status
            return newState

        case DELETE_CONTACT_REDUCER:
            newState = state.filter(item => item.id !== action.payload.id)
            return newState

        default:
            return state



    }
}