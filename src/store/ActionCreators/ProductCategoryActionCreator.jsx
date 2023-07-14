import { ADD_PRODUCT,DELETE_PRODUCT,GET_PRODUCT,UPDATE_PRODUCT } from "../Contants"
export function createProduct(data){
    console.log("maincategory Action",data);
    return{
        type:ADD_PRODUCT,
        payload:data
    }
        
}

export function getProduct(){
    return{
        type:GET_PRODUCT
    }
        
}

export function deleteProduct(data){
    return{
        type:DELETE_PRODUCT,
        payload:data
    }
        
}

export function updateProduct(data){
    return{
        type:UPDATE_PRODUCT,
        payload:data
    }
        
}