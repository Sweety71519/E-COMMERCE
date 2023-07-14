import maincategorySaga from "./MainCategorySagas";
import subcategorySaga from "./SubCategorySagas"
import brandSaga from "./BrandSagas"
import productSaga from "./ProductSagas"
import { all } from "redux-saga/effects"


export default function* RootSaga() {
    yield all([
        maincategorySaga(),
        subcategorySaga(),
        brandSaga(),
        productSaga()

    ])
}