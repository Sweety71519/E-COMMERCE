import { createService,getService,updateService,deleteService } from "./Services/ContactServices";
import {put,takeEvery} from "redux-saga/effects"
import { ADD_CONTACT,ADD_CONTACT_REDUCER,GET_CONTACT,GET_CONTACT_REDUCER,UPDATE_CONTACT,UPDATE_CONTACT_REDUCER,DELETE_CONTACT,DELETE_CONTACT_REDUCER } from "../Contants";

function* createSaga(action){
   //"maincategory Saga",action);
    var response=yield createService(action)
   yield put({type:ADD_CONTACT_REDUCER,payload:response})
}

function* getSaga(action){
    var response=yield getService(action)
   //"saga response ",response);
    yield  put({type:GET_CONTACT_REDUCER,payload:response})
}

function* updateSaga(action){
    var response=yield updateService(action)
    yield put({type:UPDATE_CONTACT_REDUCER,payload:response})
}

function* deleteSaga(action){
    var response=yield deleteService(action)
    yield put({type:DELETE_CONTACT_REDUCER,payload:response})
}

export default function* contactSaga(){
    yield console.log("main saga");
    yield takeEvery(ADD_CONTACT,createSaga)
    yield takeEvery(UPDATE_CONTACT,updateSaga)
    yield takeEvery(GET_CONTACT,getSaga)
    yield takeEvery(DELETE_CONTACT,deleteSaga)
}