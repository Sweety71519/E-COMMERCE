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
            <section className="product-details my-2 p-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                <div className="row">
                                    <div className="col-3 d-flex flex-column justify-content-between">
                                        <img src={`/images/${product.pic1}`} alt="" height="100px" width="100px" data-target="#carouselExampleControls" data-slide-to="0" className="active" />
                                        <img src={`/images/${product.pic2}`} alt="" height="100px" width="100px" data-target="#carouselExampleControls" data-slide-to="1" />
                                        <img src={`/images/${product.pic3}`} alt="" height="100px" width="100px" data-target="#carouselExampleControls" data-slide-to="2" />
                                        <img src={`/images/${product.pic4}`} alt="" height="100px" width="100px" data-target="#carouselExampleControls" data-slide-to="3" />
                                    </div>
                                    <div className="col-9">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img className="d-block w-100" src={`/images/${product.pic1}`} height="450px" alt="First slide" />
                                            </div>
                                            <div className="carousel-item">
                                                <img className="d-block w-100" src={`/images/${product.pic2}`} height="450px" alt="Second slide" />
                                            </div>
                                            <div className="carousel-item">
                                                <img className="d-block w-100" src={`/images/${product.pic3}`} height="450px" alt="Third slide" />
                                            </div>
                                            <div className="carousel-item">
                                                <img className="d-block w-100" src={`/images/${product.pic4}`} height="450px" alt="Third slide" />
                                            </div>
                                        </div>
                                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Next</span>
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="product__details__text">
                                <div className="table-responsible">
                                    <table className='table table-bordered table-stripped table-hover'>
                                        <tr>
                                            <th colSpan={2}>{product.name}</th>
                                        </tr>
                                        <tr>
                                            <th>Category</th>
                                            <td>{product.maincategory}/{product.subcategory}/{product.brand}</td>
                                        </tr>
                                        <tr>
                                            <td>Color</td>
                                            <td>{product.color}</td>
                                        </tr>
                                        <tr>
                                            <td>Size</td>
                                            <td>{product.size}</td>
                                        </tr>
                                        <tr>
                                            <td>Price</td>
                                            <td><del className='text-danger'>&#8377;{product.baseprice}</del> &#8377;{product.finalprice}<sup className='text-success'>{product.discount}%Off</sup></td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2} className="text-justify">{product.description}</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2} className='d-flex justify-content-between'>
                                                <button className='btn btn-secondary btn-sm'><i className='fa fa-plus btn'></i></button>
                                                <h4>{qty}</h4>
                                                <button className='btn btn-secondary btn-sm'><i className='fa fa-minus btn'></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>
                                                <div className='btn-group w-100'>
                                                    <button className='w-50 btn btn-success btn-sm'><i className='fa fa-shopping-cart'></i>  Add to Cart</button>
                                                    <button className='w-50 btn btn-secondary btn-sm'><i className='fa fa-heart'></i> Add to Wishlist</button>
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
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
                            <OwlCarousel loop navText={(1)} margin={10} items={4} style={{ justifyContent: "center", margin: "20px 0" }}>
                                {
                                    relatedproduct.map((item, index) => {
                                        return <div key={index} className="product__item">
                                            <Link to={`/single-product/${item.id}`}>
                                                <div className="product__item__pic set-bg" style={{ backgroundImage: `url("/images/${item.pic1}")` }}>
                                                    <div className="label new">New</div>
                                                </div>
                                            </Link>
                                            <div className="product__item__text">
                                                <h6><Link to={`/single-product/${item.id}`}>{item.name}</Link></h6>
                                                <div className="product__price"><del className='text-danger'>&#8377;{item.baseprice}</del>&#8377;{item.finalprice}<span className='text-success text-decoration-none'> {item.discount}% Off</span></div>
                                            </div>
                                        </div>

                                    })
                                }
                            </OwlCarousel>:""
                        </>

                    }
                </div>
            </section>
            {/*  Product Details Section End  */}
        </>
    )
}
