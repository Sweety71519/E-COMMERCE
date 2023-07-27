import React, { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import { getProduct } from "../store/ActionCreators/ProductCategoryActionCreator"
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
export default function SingleProduct() {
    let [qty, setQty] = useState(1)
    let [relatedproduct, setRelatedProduct] = useState([])
    var [product, setproduct] = useState({
        pic1: "",
        pic2: "",
        pic3: "",
        pic4: ""
    })
    var { id } = useParams()
    var stateData = useSelector((state) => state.ProductStateData)
    var disptach = useDispatch()
    function getAPIData() {
        disptach(getProduct())
        console.log("stateData", stateData);
        if (stateData.length) {
            let item = stateData.slice(1).reverse().find((item) => item.id === Number(id))
            console.log("item---1", item);
            if (item)
                setproduct(item)
            console.log("item", item);


            setRelatedProduct(stateData.filter((x) => x.maincategory === item.maincategory && x.subcategory === item.subcategory && x.brand === item.brand && x.id !== item.id))
        }
    }
    useEffect(() => {
        getAPIData()
    }, [stateData.length])
    return (
        <>
            {/*  Breadcrumb Begin  */}
            <div className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__links">
                                <Link to="/"><i className="fa fa-home"></i> Home</Link>
                                <Link to={`/shop/${product.maincategory}/All/All  `}>{product.maincategory} </Link>
                                <span>{product.name}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  Breadcrumb End  */}

            {/*  Product Details Section Begin  */}
            <section className="product-details spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="product__details__pic">
                                <div className="product__details__pic__left product__thumb nice-scroll">
                                    <a className="pt active" href="#product-1">
                                        <img src={`/images/${product.pic1}`} height="120px" width="100%" alt="" />
                                    </a>
                                    <a className="pt" href="#product-2">
                                        <img src={`/images/${product.pic2}`} height="120px" width="100%" alt="" />
                                    </a>
                                    <a className="pt" href="#product-3">
                                        <img src={`/images/${product.pic3}`} height="120px" width="100%" alt="" />
                                    </a>
                                    <a className="pt" href="#product-4">
                                        <img src={`/images/${product.pic4}`} height="120px" width="100%" alt="" />
                                    </a>
                                </div>
                                <div className="product__details__slider__content">
                                    <OwlCarousel className='product__details__pic__slider owl-theme' loop margin={10} items={1} nav>
                                        <img data-hash="product-1" className="product__big__img" src={`/images/${product.pic1}`} height="540px" width="100%" alt="" />
                                        <img data-hash="product-2" className="product__big__img" src={`/images/${product.pic2}`} height="540px" width="100%" alt="" />
                                        <img data-hash="product-3" className="product__big__img" src={`/images/${product.pic3}`} height="540px" width="100%" alt="" />
                                        <img data-hash="product-4" className="product__big__img" src={`/images/${product.pic4}`} height="540px" width="100%" alt="" />
                                    </OwlCarousel>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="product__details__text">
                                <h3>{product.name} <span>Category: {product.maincategory}/{product.subcategory}/{product.brand}</span></h3>
                                <div className="product__details__price">&#8377;{product.finalprice}<span>&#8377;{product.baseprice}</span><sup className='text-success'>{product.discount}%Off</sup></div>
                                <p>{product.description}</p>
                                <div className="btn-group w-25 mb-4" style={{ width: "30%" }}>
                                    <button className='btn btn-success w-25 px-2' onClick={() => {
                                        if (qty > 1)
                                            setQty(qty - 1)
                                    }}><i className='fa fa-minus'></i></button>
                                    <p className='px-3 mt-1 fs-1 w-50 text-center' style={{ fontSize: "18px", fontWeight: "bold" }}>{qty}</p>
                                    <button className='btn btn-success w-25 px-2' onClick={() => setQty(qty + 1)} ><i className='fa fa-plus'></i></button>
                                </div>
                                <br />
                                <div className="btn-group">
                                    <button className='btn btn-primary'><span className="icon_bag_alt"></span> Add to cart</button>
                                    <button className='btn btn-success'><span className="icon_heart_alt"></span>Add to wishlist</button>
                                </div>
                                <div className="product__details__widget">
                                    <ul>
                                        <li>
                                            <span>Availability:</span>
                                            <div className="stock__checkbox">
                                                {product.stock}
                                            </div>
                                        </li>
                                        <li>
                                            <span>Color:</span>
                                            {product.color}
                                        </li>
                                        <li>
                                            <span>Available size:</span>
                                            <div className="size__btn">
                                                {product.size}
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        <>

                        relatedproduct.length ?
                            <div className="col-lg-12 text-center">
                                <div className="related__title">
                                    <h5>RELATED PRODUCTS</h5>
                                </div>
                            </div>
                            <OwlCarousel loop navText={(1)} margin={10} items={4} style={{ justifyContent: "center", margin: "200px 0" }}>
                                <div className="mt-1">
                                    <div className="product__item">
                                        <div className="product__item__pic set-bg" style={{ backgroundImage: 'url("/img/product/related/rp-1.jpg")' }}>
                                            <div className="label new">New</div>
                                            <ul className="product__hover">
                                                <li><Link to="/img/product/related/rp-1.jpg" className="image-popup"><span className="arrow_expand"></span></Link></li>
                                                <li><Link to="#"><span className="icon_heart_alt"></span></Link></li>
                                                <li><Link to="#"><span className="icon_bag_alt"></span></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>:""
                        </>

                    }
                </div>
            </section>
            {/*  Product Details Section End  */}
        </>
    )
}
