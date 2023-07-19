import { createService,getService,updateService,deleteService } from "./Services/MaincategoryServices";
import {put,takeEvery} from "redux-saga/effects"
import { ADD_MAINCATEGORY,ADD_MAINCATEGORY_REDUCER,GET_MAINCATEGORY,GET_MAINCATEGORY_REDUCER,UPDATE_MAINCATEGORY,UPDATE_MAINCATEGORY_REDUCER,DELETE_MAINCATEGORY,DELETE_MAINCATEGORY_REDUCER } from "../Contants";

function* createSaga(action){
   //"maincategory Saga",action);
    var response=yield createService(action)
   yield put({type:ADD_MAINCATEGORY_REDUCER,payload:response})
}

function* getSaga(action){
    var response=yield getService(action)
   //"saga response ",response);
    yield  put({type:GET_MAINCATEGORY_REDUCER,payload:response})
}

function* updateSaga(action){
    var response=yield updateService(action)
    yield put({type:UPDATE_MAINCATEGORY_REDUCER,payload:response})
}

function* deleteSaga(action){
    var response=yield deleteService(action)
    yield put({type:DELETE_MAINCATEGORY_REDUCER,payload:response})
}

export default function* maincategorySaga(){
    yield console.log("main saga");
    yield takeEvery(ADD_MAINCATEGORY,createSaga)
    yield takeEvery(UPDATE_MAINCATEGORY,updateSaga)
    yield takeEvery(GET_MAINCATEGORY,getSaga)
    yield takeEvery(DELETE_MAINCATEGORY,deleteSaga)
}