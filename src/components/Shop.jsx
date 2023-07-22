import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { getMaincategory } from "../store/ActionCreators/MainCategoryActionCreator"
import { getSubcategory } from "../store/ActionCreators/SubCategoryActionCreator"
import { getBrand } from "../store/ActionCreators/BrandCategoryActionCreator"
import { getProduct } from "../store/ActionCreators/ProductCategoryActionCreator"
import { useDispatch, useSelector } from 'react-redux';

export default function Shop() {
    var [product, setproduct] = useState([])
    let [mc,setMc]=useState("All")
    let [sc,setSc]=useState("All")
    let [br,setBr]=useState("All")
    let params=useParams()
    var stateData = useSelector((state) => state.ProductStateData)
    var AllMaincategoryData = useSelector((state) => state.MaincategoryStateData)
    var AllSubcategoryData = useSelector((state) => state.SubcategoryStateData)
    var AllBrandData = useSelector((state) => state.BrandStateData)
    var disptach = useDispatch()
    function applyfilter(mc,sc,br){
        console.log("type---",mc,sc,br);
        if (mc === "All" && sc === "All" && br === "All")
            setproduct(stateData.slice(1).reverse())
        else if (mc !== "All" && sc === "All" && br === "All")
            setproduct(stateData.slice(1).reverse().filter((item) => item.maincategory === mc))
        else if (mc === "All" && sc !== "All" && br === "All")
            setproduct(stateData.slice(1).reverse().filter((item) => item.subcategory === sc))
        else if (mc === "All" && sc === "All" && br !== "All")
            setproduct(stateData.slice(1).reverse().filter((item) => item.brand === br))
        else if (mc !== "All" && sc !== "All" && br === "All")
            setproduct(stateData.slice(1).reverse().filter((item) => item.maincategory === mc && item.subcategory === sc))
        else if (mc !== "All" && sc === "All" && br !== "All")
            setproduct(stateData.slice(1).reverse().filter((item) => item.maincategory === mc && item.brand === br))
        else if (mc === "All" && sc !== "All" && br !== "All")
            setproduct(stateData.slice(1).reverse().filter((item) => item.brand === br && item.subcategory === sc))
        else
            setproduct(stateData.slice(1).reverse().filter((item) => item.maincategory === mc && item.subcategory === sc && item.brand === br))



    }

    function categoryfilter(mc,sc,br){
        setMc(mc)
        setSc(sc)
        setBr(br)
        applyfilter(mc,sc,br)

    }
    function getAPIData() {
        disptach(getProduct())
        disptach(getMaincategory())
        disptach(getSubcategory())
        disptach(getBrand()) 
        setSc(params.mc)
        setSc(params.sc)
        setSc(params.br)
        applyfilter(params.mc,params.sc,params.br)
        console.log(stateData);
        // if (stateData.length) {
        //     setproduct(stateData.slice(1).reverse().slice(0, 8))
        //     console.log("data---", product);
        // }
    }
    useEffect(() => {
        getAPIData()

    }, [params,stateData.length, AllMaincategoryData.length, AllSubcategoryData.length,AllBrandData.length])
    return (
        <>
            {/*  Breadcrumb Begin  */}
            <div className="breadcrumb-option">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__links">
                                <a href="./index.html"><i className="fa fa-home"></i> Home</a>
                                <span>Shop</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  Breadcrumb End  */}

            {/*  Shop Section Begin  */}
            <section className="shop spad">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="shop__sidebar">
                                <div className="sidebar__categories">
                                    <div className="categories__accordion card p-3">
                                        <div className="accordion" id="accordionExample">
                                            <div className="list-group">
                                                <div className="section-title">
                                                    <h4>Maincategory</h4>
                                                </div>
                                                <button onClick={()=>categoryfilter("All",sc,br)} type="button" className="list-group-item list-group-item-action">All</button>
                                                {
                                                    AllMaincategoryData && AllMaincategoryData.slice(1).reverse().map((item, index) => {
                                                        return < button key={index} onClick={()=>categoryfilter(item.name,sc,br)} type="button" className="list-group-item list-group-item-action">{item.name}</button>
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>

                                    <div className="categories__accordion card p-3">
                                        <div className="accordion" id="accordionExample">
                                            <div className="list-group">
                                                <div className="section-title">
                                                    <h4>Subcategory</h4>
                                                </div>
                                                <button onClick={()=>categoryfilter(mc,"All",br)} type="button" className="list-group-item list-group-item-action">All</button>
                                                {
                                                    AllSubcategoryData && AllSubcategoryData.slice(1).reverse().map((item, index) => {
                                                        return < button key={index} onClick={()=>categoryfilter(mc,item.name,br)} type="button" className="list-group-item list-group-item-action">{item.name}</button>
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>

                                    <div className="categories__accordion card p-3">
                                        <div className="accordion" id="accordionExample">
                                            <div className="list-group">
                                                <div className="section-title">
                                                    <h4>Brand</h4>
                                                </div>
                                                <button type="button" onClick={()=>categoryfilter(mc,sc,"All")} className="list-group-item list-group-item-action">All</button>
                                                {
                                                    AllBrandData && AllBrandData.slice(1).reverse().map((item, index) => {
                                                        return < button key={index} onClick={()=>categoryfilter(mc,sc,item.name)} type="button" className="list-group-item list-group-item-action">{item.name}</button>
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar__filter">
                                    <div className="section-title">
                                        <h4>Shop by price</h4>
                                    </div>
                                    <div className="filter-range-wrap">
                                        <div className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                                            data-min="33" data-max="99"></div>
                                        <div className="range-slider">
                                            <div className="price-input">
                                                <p>Price:</p>
                                                <input type="text" id="minamount" />
                                                <input type="text" id="maxamount" />
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#">Filter</a>
                                </div>
                                <div className="sidebar__sizes">
                                    <div className="section-title">
                                        <h4>Shop by size</h4>
                                    </div>
                                    <div className="size__list">
                                        <label htmlFor="xxs">
                                            xxs
                                            <input type="checkbox" id="xxs" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label htmlFor="xs">
                                            xs
                                            <input type="checkbox" id="xs" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label htmlFor="xss">
                                            xs-s
                                            <input type="checkbox" id="xss" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label htmlFor="s">
                                            s
                                            <input type="checkbox" id="s" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label htmlFor="m">
                                            m
                                            <input type="checkbox" id="m" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label htmlFor="ml">
                                            m-l
                                            <input type="checkbox" id="ml" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label htmlFor="l">
                                            l
                                            <input type="checkbox" id="l" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label htmlFor="xl">
                                            xl
                                            <input type="checkbox" id="xl" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                                <div className="sidebar__color">
                                    <div className="section-title">
                                        <h4>Shop by size</h4>
                                    </div>
                                    <div className="size__list color__list">
                                        <label htmlFor="black">
                                            Blacks
                                            <input type="checkbox" id="black" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label htmlFor="whites">
                                            Whites
                                            <input type="checkbox" id="whites" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label htmlFor="reds">
                                            Reds
                                            <input type="checkbox" id="reds" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label htmlFor="greys">
                                            Greys
                                            <input type="checkbox" id="greys" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label htmlFor="blues">
                                            Blues
                                            <input type="checkbox" id="blues" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label htmlFor="beige">
                                            Beige Tones
                                            <input type="checkbox" id="beige" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label htmlFor="greens">
                                            Greens
                                            <input type="checkbox" id="greens" />
                                            <span className="checkmark"></span>
                                        </label>
                                        <label htmlFor="yellows">
                                            Yellows
                                            <input type="checkbox" id="yellows" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9">
                            <div className="row">

                                {
                                    product.map((item, index) => {
                                        return <div key={index} className="col-lg-3 col-md-4 col-sm-6 mix women">
                                            <div className="product__item">
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
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*  Shop Section End  */}
        </>
    )
}
