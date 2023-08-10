import { createService,getService,updateService,deleteService } from "./Services/CartServices";
import {put,takeEvery} from "redux-saga/effects"
import { ADD_CART,ADD_CART_REDUCER,GET_CART,GET_CART_REDUCER,UPDATE_CART,UPDATE_CART_REDUCER,DELETE_CART,DELETE_CART_REDUCER } from "../Contants";

function* createSaga(action){
   //"maincategory Saga",action);
    var response=yield createService(action)
   yield put({type:ADD_CART_REDUCER,payload:response})
}

function* getSaga(action){
    var response=yield getService(action)
   //"saga response ",response);
    yield  put({type:GET_CART_REDUCER,payload:response})
}

function* updateSaga(action){
    var response=yield updateService(action)
    yield put({type:UPDATE_CART_REDUCER,payload:response})
}

function* deleteSaga(action){
    var response=yield deleteService(action)
    yield put({type:DELETE_CART_REDUCER,payload:response})
}

export default function* cartSaga(){
    yield console.log("main saga");
    yield takeEvery(ADD_CART,createSaga)
    yield takeEvery(UPDATE_CART,updateSaga)
    yield takeEvery(GET_CART,getSaga)
    yield takeEvery(DELETE_CART,deleteSaga)
}