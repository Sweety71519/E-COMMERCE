import React from 'react'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import Shop from './Shop';
import SingleProduct from './SingleProduct';
import Cart from './Cart';
import Checkout from './Checkout';
import Contact from './Contact';
import AdminHome from './Admin/AdminHome';
import Login from './Login';
import SignUp from './SignUp';
import Profile from './Profile';
import UpdateUserProfile from './UpdateUserProfile';

//Maincategory
import AdminMainCategory from './Admin/maincategory/AdminMainCategory';
import AdminAddmainCategory from './Admin/maincategory/AdminAddmainCategory';
import AdminUpdatemainCategory from './Admin/maincategory/AdminUpdatemainCategory';

//Subcategory
import AdminAddSubcategory from './Admin/subcategory /AdminAddSubcategory';
import AdminSubcategory from './Admin/subcategory /AdminSubcategory';
import AdminUpdateSubcategory from './Admin/subcategory /AdminUpdateSubcategory';


import AdminAddProduct from './Admin/product/AdminAddProduct';
import AdminProduct from './Admin/product/AdminProduct';
import AdminUpdateProduct from './Admin/product/AdminUpdateProduct';

import AdminBrand from './Admin/brand/Brand';
import AdminAddBrand from './Admin/brand/AddBrand';
import AdminUpdateBrand from './Admin/brand/UpdateBrandDetails';
import Confirmation from './Confirmation';
import AdminUser from './Admin/user/AdminUser';
import AdminNewslatter from './Admin/NewsLatters/AdminNewslatter';
import AdminContact from './Admin/contact/AdminContact';
import AdminSingleContact from './Admin/contact/SingleContact';


export default function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/shop/:mc/:sc/:br' element={<Shop />} />
                <Route path='/single-product/:id' element={<SingleProduct />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/admin' element={<AdminHome />} />
                <Route path='/login' element={<Login />}/>
                <Route path='/singup' element={<SignUp />}/>
                <Route path='/profile' element={<Profile />}/>
                <Route path='/confirmation' element={<Confirmation />}/>
                <Route path='/update-profile' element={<UpdateUserProfile />}/>


                <Route path='/admin-maincategory' element={<AdminMainCategory />} />
                <Route path='/admin-add-maincategory' element={<AdminAddSubcategory />}/>
                <Route path='/admin-update-maincategory/:id' element={<AdminUpdatemainCategory />}/>

                <Route path='/admin-subcategory' element={<AdminSubcategory />} />
                <Route path='/admin-add-subcategory' element={<AdminAddSubcategory />}/>
                <Route path='/admin-update-subcategory/:id' element={<AdminUpdateSubcategory />}/>

                <Route path='/admin-brand' element={<AdminBrand />} />
                <Route path='/admin-add-brand' element={<AdminAddBrand />}/>
                <Route path='/admin-update-brand/:id' element={<AdminUpdateBrand />}/>

                <Route path='/admin-product' element={<AdminProduct />} />
                <Route path='/admin-add-product' element={<AdminAddProduct />}/>
                <Route path='/admin-update-product/:id' element={<AdminUpdateProduct />}/>

                <Route path='/admin-user' element={<AdminUser />} />
                <Route path='/admin-newsletter' element={<AdminNewslatter />} />
                <Route path='/admin-contact' element={<AdminContact />} />
                <Route path='/admin-single-contact/:id' element={<AdminSingleContact />} />



            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
