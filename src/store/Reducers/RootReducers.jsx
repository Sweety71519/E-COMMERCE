import { combineReducers } from "@reduxjs/toolkit";

import MaincategoryReducer from "./MaincategoryReducer";
import ProductReducer from "./ProductReducer";
import BrandReducer from "./BrandReducer";
import SubcategoryReducer from "./SubcategoryReducer";
import CartReducer from "./CartReducer";
import ContactReducer from "./ContactReducer";
import NewsLatterReducer from "./NewsLatterReducer";
import WishListReducer from "./WishListReducer";
import CheckOutReducer from "./CheckOutReducer";

export default combineReducers({
    MaincategoryStateData:MaincategoryReducer,
    ProductStateData:ProductReducer,
    BrandStateData:BrandReducer,
    SubcategoryStateData:SubcategoryReducer,
    CartStateData:CartReducer,
    ContactStateData:ContactReducer,
    NewsLatterStateData:NewsLatterReducer,
    WishListStateData:WishListReducer,
    CheckOutStateData:CheckOutReducer



})