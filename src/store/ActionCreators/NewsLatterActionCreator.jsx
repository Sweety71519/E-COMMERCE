import { ADD_NEWLATTER,DELETE_NEWLATTER,GET_NEWLATTER } from "../Contants"
export function createNewslatter(data){
   //"maincategory Action",data);
    return{
        type:ADD_NEWLATTER,
        payload:data
    }
        
}

export function getNewslatter(){
    return{
        type:GET_NEWLATTER
    }
        
}

export function deleteNewslatter(data){
    return{
        type:DELETE_NEWLATTER,
        payload:data
    }
        
}