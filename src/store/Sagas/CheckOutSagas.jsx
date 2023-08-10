import { createService,getService,updateService,deleteService } from "./Services/CheckoutServices";
import {put,takeEvery} from "redux-saga/effects"
import { ADD_CHECKOUT,ADD_CHECKOUT_REDUCER,GET_CHECKOUT,GET_CHECKOUT_REDUCER,UPDATE_CHECKOUT,UPDATE_CHECKOUT_REDUCER,DELETE_CHECKOUT,DELETE_CHECKOUT_REDUCER } from "../Contants";

function* createSaga(action){
   //"maincategory Saga",action);
    var response=yield createService(action)
   yield put({type:ADD_CHECKOUT_REDUCER,payload:response})
}

function* getSaga(action){
    var response=yield getService(action)
   //"saga response ",response);
    yield  put({type:GET_CHECKOUT_REDUCER,payload:response})
}

function* updateSaga(action){
    var response=yield updateService(action)
    yield put({type:UPDATE_CHECKOUT_REDUCER,payload:response})
}

function* deleteSaga(action){
    var response=yield deleteService(action)
    yield put({type:DELETE_CHECKOUT_REDUCER,payload:response})
}

export default function* checkOutSaga(){
    yield console.log("main saga");
    yield takeEvery(ADD_CHECKOUT,createSaga)
    yield takeEvery(UPDATE_CHECKOUT,updateSaga)
    yield takeEvery(GET_CHECKOUT,getSaga)
    yield takeEvery(DELETE_CHECKOUT,deleteSaga)
}