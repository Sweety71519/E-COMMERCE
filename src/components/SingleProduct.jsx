import React, { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import { getProduct } from "../store/ActionCreators/ProductCategoryActionCreator"
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
export default function SingleProduct() {
    let [qty, setQty] = useState(1)
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
        console.log(stateData);
        if (stateData.length) {
            let item = setproduct(stateData.slice(1).reverse().find((item) => item.id === Number(id)))
            if (item)
                setproduct(item)
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
                                <div className="btn-group w-25 mb-4" style={{width:"30%"}}>
                                    <button className='btn btn-success w-25 px-2' onClick={()=>{
                                        if(qty > 1)
                                         setQty(qty - 1)
                                        }}><i className='fa fa-minus'></i></button>
                                    <p className='px-3 mt-1 fs-1 w-50 text-center'style={{fontSize:"23px",fontWeight:"bold"}}>{qty}</p>
                                    <button className='btn btn-success w-25 px-2' onClick={()=>setQty(qty+1)} ><i className='fa fa-plus'></i></button>
                                </div>
                                <br/>
                                    <div className="btn-group">
                                        <button className='btn btn-primary'><span className="icon_bag_alt"></span> Add to cart</button>
                                        <button className='btn btn-success'><span className="icon_heart_alt"></span>Add to wishlist</button>
                                    </div>
                                    <div className="product__details__widget">
                                        <ul>
                                            <li>
                                                <span>Availability:</span>
                                                <div className="stock__checkbox">
                                                    <label for="stockin">
                                                        In Stock
                                                        <input type="checkbox" id="stockin" />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li>
                                                <span>Available color:</span>
                                                <div className="color__checkbox">
                                                    <label for="red">
                                                        <input type="radio" name="color__radio" id="red" checked />
                                                        <span className="checkmark"></span>
                                                    </label>
                                                    <label for="black">
                                                        <input type="radio" name="color__radio" id="black" />
                                                        <span className="checkmark black-bg"></span>
                                                    </label>
                                                    <label for="grey">
                                                        <input type="radio" name="color__radio" id="grey" />
                                                        <span className="checkmark grey-bg"></span>
                                                    </label>
                                                </div>
                                            </li>
                                            <li>
                                                <span>Available size:</span>
                                                <div className="size__btn">
                                                    <label for="xs-btn" className="active">
                                                        <input type="radio" id="xs-btn" />
                                                        xs
                                                    </label>
                                                    <label for="s-btn">
                                                        <input type="radio" id="s-btn" />
                                                        s
                                                    </label>
                                                    <label for="m-btn">
                                                        <input type="radio" id="m-btn" />
                                                        m
                                                    </label>
                                                    <label for="l-btn">
                                                        <input type="radio" id="l-btn" />
                                                        l
                                                    </label>
                                                </div>
                                            </li>
                                            <li>
                                                <span>Promotions:</span>
                                                <p>Free shipping</p>
                                            </li>
                                        </ul>
                                    </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-12">
                            <div className="product__details__tab">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">Description</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab">Specification</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab">Reviews ( 2 )</a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane active" id="tabs-1" role="tabpanel">
                                        <h6>Description</h6>
                                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed
                                            quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret.
                                            Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam
                                            voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu
                                            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla
                                            consequat massa quis enim.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                            dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                                            nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                                            quis, sem.</p>
                                    </div>
                                    <div className="tab-pane" id="tabs-2" role="tabpanel">
                                        <h6>Specification</h6>
                                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed
                                            quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret.
                                            Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam
                                            voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu
                                            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla
                                            consequat massa quis enim.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                            dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                                            nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                                            quis, sem.</p>
                                    </div>
                                    <div className="tab-pane" id="tabs-3" role="tabpanel">
                                        <h6>Reviews ( 2 )</h6>
                                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed
                                            quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret.
                                            Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam
                                            voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu
                                            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla
                                            consequat massa quis enim.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                            dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                                            nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                                            quis, sem.</p>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="related__title">
                                <h5>RELATED PRODUCTS</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" style={{ backgroundImage: 'url("/img/product/related/rp-1.jpg")' }}>
                                    <div className="label new">New</div>
                                    <ul className="product__hover">
                                        <li><Link to="/img/product/related/rp-1.jpg" className="image-popup"><span className="arrow_expand"></span></Link></li>
                                        <li><Link to="#"><span className="icon_heart_alt"></span></Link></li>
                                        <li><Link to="#"><span className="icon_bag_alt"></span></Link></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><Link to="#">Buttons tweed blazer</Link></h6>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product__price">$ 59.0</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" style={{ backgroundImage: 'url("/img/product/related/rp-2.jpg")' }}>
                                    <ul className="product__hover">
                                        <li><Link to="/img/product/related/rp-2.jpg" className="image-popup"><span className="arrow_expand"></span></Link></li>
                                        <li><Link to="#"><span className="icon_heart_alt"></span></Link></li>
                                        <li><Link to="#"><span className="icon_bag_alt"></span></Link></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><Link to="#">Flowy striped skirt</Link></h6>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product__price">$ 49.0</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" style={{ backgroundImage: 'url("/img/product/related/rp-3.jpg")' }}>
                                    <div className="label stockout">out of stock</div>
                                    <ul className="product__hover">
                                        <li><Link to="/img/product/related/rp-3.jpg" className="image-popup"><span className="arrow_expand"></span></Link></li>
                                        <li><Link to="#"><span className="icon_heart_alt"></span></Link></li>
                                        <li><Link to="#"><span className="icon_bag_alt"></span></Link></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><Link to="#">Cotton T-Shirt</Link></h6>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product__price">$ 59.0</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" style={{ backgroundImage: 'url("/img/product/related/rp-4.jpg")' }}>
                                    <ul className="product__hover">
                                        <li><Link to="/img/product/related/rp-4.jpg" className="image-popup"><span className="arrow_expand"></span></Link></li>
                                        <li><Link to="#"><span className="icon_heart_alt"></span></Link></li>
                                        <li><Link to="#"><span className="icon_bag_alt"></span></Link></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><Link to="#">Slim striped pocket shirt</Link></h6>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <div className="product__price">$ 59.0</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*  Product Details Section End  */}
        </>
    )
}
