import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
   var navigate=useNavigate()
    function logout(){
        localStorage.clear()
        navigate("/login")
    }
    return (
        <>
            {/*  Offcanvas Menu Begin */}
            <div className="offcanvas-menu-overlay"></div>
            <div className="offcanvas-menu-wrapper">
                <div className="offcanvas__close">+</div>
                <ul className="offcanvas__widget">
                    <li><span className="icon_search search-switch"></span></li>
                    <li><a href="#"><span className="icon_heart_alt"></span>
                        <div className="tip">2</div>
                    </a></li>
                    <li><a href="#"><span className="icon_bag_alt"></span>
                        <div className="tip">2</div>
                    </a></li>
                </ul>
                <div className="offcanvas__logo">
                    <Link to="/"><img src="img/logo.png" alt="" /></Link>
                </div>
                <div id="mobile-menu-wrap"></div>
            </div>
            {/*  Offcanvas Menu End */}

            {/*  Header Section Begin */}
            <header className="header sticky-top">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-lg-2">
                            <div className="header__logo">
                                <Link to="/"><img src="img/logo.png" alt="" /></Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <nav className="header__menu">
                                <ul>
                                    <li className="active"><Link to="/">Home</Link></li>
                                    <li><Link to="/shop/Female/All/All">Women’s</Link></li>
                                    <li><Link to="/shop/Male/All/All">Men’s</Link></li>
                                    <li><Link to="/shop/Kids/All/All">Kids’s</Link></li>
                                    <li><Link to="/shop/All/All/All">Shop</Link></li>
                                    <li><Link to="/admin">Admin</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-3">
                            <nav className="header__menu">
                                <ul>
                                    {
                                        localStorage.getItem("login")?
                                        <li className='ml-5'><Link to="#">{localStorage.getItem("name")}</Link>
                                        <ul className="dropdown">
                                          {
                                            localStorage.getItem("role")==="Buyer"?
                                            <>
                                            <li><Link to="/profile">Profile</Link></li>
                                            <li><Link to="/cart">Cart</Link></li>
                                            </>:<li><Link to="/admin">Profile</Link></li>
                                          }
                                           <button className='btn text-light p-3 btn-sm' onClick={logout}>Logout</button>
                                        </ul>    
                                    </li>:
                                    <li >
                                        <Link to="/login">login</Link>
                                    </li>
                                    }
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="canvas__open">
                        <i className="fa fa-bars"></i>
                    </div>
                </div>
            </header>
            {/*  Header Section End */}

        </>
    )
}
