//using json-server 1st need to install cmd:-npm i -g json-server
//after that need to write (json-server data.json --watch --port 8000 ) this cmd for creating json file
import { configureStore } from "@reduxjs/toolkit";

import CreateSagaMiddleware from "redux-saga";

import RootSaga from "./Sagas/RootSaga";
import RootReducer from "./Reducers/RootReducers"

const sagaMiddleware = CreateSagaMiddleware();

const Store = configureStore({
    reducer: RootReducer,
    middleware: () => [sagaMiddleware]
})

export default Store;
sagaMiddleware.run(RootSaga);