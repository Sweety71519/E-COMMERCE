import { combineReducers } from "@reduxjs/toolkit";

import MaincategoryReducer from "./MaincategoryReducer";
import ProductReducer from "./ProductReducer";
import BrandReducer from "./BrandReducer";
import SubcategoryReducer from "./SubcategoryReducer";

export default combineReducers({
    MaincategoryStateData:MaincategoryReducer,
    ProductStateData:ProductReducer,
    BrandStateData:BrandReducer,
    SubcategoryStateData:SubcategoryReducer
})