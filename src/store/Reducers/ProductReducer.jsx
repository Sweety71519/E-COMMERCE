import {  ADD_PRODUCT_REDUCER, GET_PRODUCT_REDUCER, UPDATE_PRODUCT_REDUCER, DELETE_PRODUCT_REDUCER } from "../Contants";


export default function ProductReducer(state = [], action) {
    let newState, index;
   //"reducer",action.type);
    switch (action.type) {
        case ADD_PRODUCT_REDUCER:
            newState = state
            newState.push(action.payload)
           //"add_PRODUCT",newState);
            return newState

        case GET_PRODUCT_REDUCER:
           //"add_PRODUCT",action.payload);

            return action.payload

        // case UPDATE_PRODUCT_REDUCER:
        //     return action.payload

        case UPDATE_PRODUCT_REDUCER:
            newState = state
            index = state.findIndex(item => item.id === action.payload.id)
            newState[index].name = action.payload.name
            newState[index].maincategory = action.payload.maincategory
            newState[index].subcategory = action.payload.subcategory
            newState[index].brand = action.payload.brand
            newState[index].size = action.payload.size
            newState[index].color = action.payload.color
            newState[index].baseprice = action.payload.baseprice
            newState[index].finalprice = action.payload.finalprice
            newState[index].stock = action.payload.stock
            newState[index].description = action.payload.description
            newState[index].discount = action.payload.discount
            newState[index].pic1 = action.payload.pic1
            newState[index].pic2 = action.payload.pic2
            newState[index].pic3 = action.payload.pic3
            newState[index].pic4 = action.payload.pic4

            return newState

        case DELETE_PRODUCT_REDUCER:
            newState = state.filter(item => item.id !== action.payload.id)
            return newState

        default:
            return state



    }
}