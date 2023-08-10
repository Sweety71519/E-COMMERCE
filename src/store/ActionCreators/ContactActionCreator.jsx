import { ADD_CONTACT,DELETE_CONTACT,GET_CONTACT,UPDATE_CONTACT } from "../Contants"
export function createContact(data){
   //"maincategory Action",data);
    return{
        type:ADD_CONTACT,
        payload:data
    }
        
}

export function getContact(){
    return{
        type:GET_CONTACT
    }
        
}

export function deleteContact(data){
    return{
        type:DELETE_CONTACT,
        payload:data
    }
        
}

export function updateContact(data){
    return{
        type:UPDATE_CONTACT,
        payload:data
    }
        
}