import { createService,getService,deleteService } from "./Services/WishlistServices";
import {put,takeEvery} from "redux-saga/effects"
import { ADD_WISHLIST,ADD_WISHLIST_REDUCER,GET_WISHLIST,GET_WISHLIST_REDUCER,DELETE_WISHLIST,DELETE_WISHLIST_REDUCER } from "../Contants";

function* createSaga(action){
   //"maincategory Saga",action);
    var response=yield createService(action)
   yield put({type:ADD_WISHLIST_REDUCER,payload:response})
}

function* getSaga(action){
    var response=yield getService(action)
   //"saga response ",response);
    yield  put({type:GET_WISHLIST_REDUCER,payload:response})
}

function* deleteSaga(action){
    var response=yield deleteService(action)
    yield put({type:DELETE_WISHLIST_REDUCER,payload:response})
}

export default function* wishlistSaga(){
    yield takeEvery(ADD_WISHLIST,createSaga)
    yield takeEvery(GET_WISHLIST,getSaga)
    yield takeEvery(DELETE_WISHLIST,deleteSaga)
}