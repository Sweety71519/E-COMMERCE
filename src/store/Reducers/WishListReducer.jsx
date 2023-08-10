import {  ADD_WISHLIST_REDUCER, GET_WISHLIST_REDUCER, UPDATE_WISHLIST_REDUCER, DELETE_WISHLIST_REDUCER } from "../Contants";


export default function WishListReducer(state = [], action) {
    let newState, index;
   //"reducer",action.type);
    switch (action.type) {
        case ADD_WISHLIST_REDUCER:
            newState = state
            newState.push(action.payload)
           //"add_WISHLIST",newState);
            return newState

        case GET_WISHLIST_REDUCER:
           //"add_WISHLIST",action.payload);

            return action.payload

        // case UPDATE_WISHLIST_REDUCER:
        //     return action.payload

        // case UPDATE_WISHLIST_REDUCER:
        //     newState = state
        //     index = state.findIndex(item => item.id === action.payload.id)
        //     newState[index].name = action.payload.name
        //     return newState

        case DELETE_WISHLIST_REDUCER:
            newState = state.filter(item => item.id !== action.payload.id)
            return newState

        default:
            return state



    }
}