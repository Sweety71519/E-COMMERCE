import { ADD_CHECKOUT,DELETE_CHECKOUT,GET_CHECKOUT,UPDATE_CHECKOUT } from "../Contants"
export function createCheckOut(data){
   //"maincategory Action",data);
    return{
        type:ADD_CHECKOUT,
        payload:data
    }
        
}

export function getCheckOut(){
    return{
        type:GET_CHECKOUT
    }
        
}

export function deleteCheckOut(data){
    return{
        type:DELETE_CHECKOUT,
        payload:data
    }
        
}

export function updateCheckOut(data){
    return{
        type:UPDATE_CHECKOUT,
        payload:data
    }
        
}