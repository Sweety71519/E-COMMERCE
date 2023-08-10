import { createService,getService,updateService,deleteService } from "./Services/NewslatterServices";
import {put,takeEvery} from "redux-saga/effects"
import { ADD_NEWLATTER,ADD_NEWLATTER_REDUCER,GET_NEWLATTER,GET_NEWLATTER_REDUCER,DELETE_NEWLATTER,DELETE_NEWLATTER_REDUCER } from "../Contants";

function* createSaga(action){
   //"maincategory Saga",action);
    var response=yield createService(action)
   yield put({type:ADD_NEWLATTER_REDUCER,payload:response})
}

function* getSaga(action){
    var response=yield getService(action)
   //"saga response ",response);
    yield  put({type:GET_NEWLATTER_REDUCER,payload:response})
}


function* deleteSaga(action){
    var response=yield deleteService(action)
    yield put({type:DELETE_NEWLATTER_REDUCER,payload:response})
}

export default function* newslatterSaga(){
    yield takeEvery(ADD_NEWLATTER,createSaga)
    yield takeEvery(GET_NEWLATTER,getSaga)
    yield takeEvery(DELETE_NEWLATTER,deleteSaga)
}