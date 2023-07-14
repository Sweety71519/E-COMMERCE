import { createService,getService,updateService,deleteService } from "./Services/SubcategoryServices";
import {put,takeEvery} from "redux-saga/effects"
import { ADD_SUBCATEGORY,ADD_SUBCATEGORY_REDUCER,GET_SUBCATEGORY,GET_SUBCATEGORY_REDUCER,UPDATE_SUBCATEGORY,UPDATE_SUBCATEGORY_REDUCER,DELETE_SUBCATEGORY,DELETE_SUBCATEGORY_REDUCER } from "../Contants";

function* createSaga(action){
    console.log("maincategory Saga",action);
    var response=yield createService(action)
   yield put({type:ADD_SUBCATEGORY_REDUCER,payload:response})
}

function* getSaga(action){
    var response=yield getService(action)
    console.log("saga response ",response);
    yield  put({type:GET_SUBCATEGORY_REDUCER,payload:response})
}

function* updateSaga(action){
    var response=yield updateService(action)
    yield put({type:UPDATE_SUBCATEGORY_REDUCER,payload:response})
}

function* deleteSaga(action){
    var response=yield deleteService(action)
    yield put({type:DELETE_SUBCATEGORY_REDUCER,payload:response})
}

export default function* subcategorySaga(){
    yield console.log("main saga");
    yield takeEvery(ADD_SUBCATEGORY,createSaga)
    yield takeEvery(UPDATE_SUBCATEGORY,updateSaga)
    yield takeEvery(GET_SUBCATEGORY,getSaga)
    yield takeEvery(DELETE_SUBCATEGORY,deleteSaga)
}