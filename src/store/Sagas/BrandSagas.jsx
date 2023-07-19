import { createService,getService,updateService,deleteService } from "./Services/BrandServices";
import {put,takeEvery} from "redux-saga/effects"
import { ADD_BRAND,ADD_BRAND_REDUCER,GET_BRAND,GET_BRAND_REDUCER,UPDATE_BRAND,UPDATE_BRAND_REDUCER,DELETE_BRAND,DELETE_BRAND_REDUCER } from "../Contants";

function* createSaga(action){
   //"maincategory Saga",action);
    var response=yield createService(action)
   yield put({type:ADD_BRAND_REDUCER,payload:response})
}

function* getSaga(action){
    var response=yield getService(action)
   //"saga response ",response);
    yield  put({type:GET_BRAND_REDUCER,payload:response})
}

function* updateSaga(action){
    var response=yield updateService(action)
    yield put({type:UPDATE_BRAND_REDUCER,payload:response})
}

function* deleteSaga(action){
    var response=yield deleteService(action)
    yield put({type:DELETE_BRAND_REDUCER,payload:response})
}

export default function* brandSaga(){
    yield console.log("main saga");
    yield takeEvery(ADD_BRAND,createSaga)
    yield takeEvery(UPDATE_BRAND,updateSaga)
    yield takeEvery(GET_BRAND,getSaga)
    yield takeEvery(DELETE_BRAND,deleteSaga)
}