import { createService,getService,updateService,deleteService } from "./Services/ProductServices";
import {put,takeEvery} from "redux-saga/effects"
import { ADD_PRODUCT,ADD_PRODUCT_REDUCER,GET_PRODUCT,GET_PRODUCT_REDUCER,UPDATE_PRODUCT,UPDATE_PRODUCT_REDUCER,DELETE_PRODUCT,DELETE_PRODUCT_REDUCER } from "../Contants";

function* createSaga(action){
   //"maincategory Saga",action);
    var response=yield createService(action)
   yield put({type:ADD_PRODUCT_REDUCER,payload:response})
}

function* getSaga(action){
    var response=yield getService(action)
   //"saga response ",response);
    yield  put({type:GET_PRODUCT_REDUCER,payload:response})
}

function* updateSaga(action){
    var response=yield updateService(action)
    yield put({type:UPDATE_PRODUCT_REDUCER,payload:response})
}

function* deleteSaga(action){
    var response=yield deleteService(action)
    yield put({type:DELETE_PRODUCT_REDUCER,payload:response})
}

export default function* productSaga(){
    yield console.log("main saga");
    yield takeEvery(ADD_PRODUCT,createSaga)
    yield takeEvery(UPDATE_PRODUCT,updateSaga)
    yield takeEvery(GET_PRODUCT,getSaga)
    yield takeEvery(DELETE_PRODUCT,deleteSaga)
}