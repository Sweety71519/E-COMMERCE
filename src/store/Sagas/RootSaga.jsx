import maincategorySaga from "./MainCategorySagas";
import subcategorySaga from "./SubCategorySagas"
import brandSaga from "./BrandSagas"
import productSaga from "./ProductSagas"
import { all } from "redux-saga/effects"
import cartSaga from "./CartSagas"
import checkOutSaga from "./CheckOutSagas"
import newslatterSaga from "./NewsLatterSagas"

import wishlistSaga from "./WishListSagas"

import contactSaga from "./ContactSagas"



export default function* RootSaga() {
    yield all([
        maincategorySaga(),
        subcategorySaga(),
        brandSaga(),
        productSaga(),
        cartSaga(),
        checkOutSaga(),
        newslatterSaga(),
        wishlistSaga(),
        contactSaga()
    ])
}