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
    let [min,setMin]=useState(0)
    let [max,setMax]=useState(5000)
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
    function getPriceInput(e){
        var {name,value}=e.target 
        if(name==="min")
        setMin(value)
        else
        setMax(value)

    }
    function applyPriceFilter(){
        var p=[]
        if (mc === "All" && sc === "All" && br === "All")
            p=stateData.slice(1).reverse()
        else if (mc !== "All" && sc === "All" && br === "All")
            p=stateData.slice(1).reverse().filter((item) => item.maincategory === mc)
        else if (mc === "All" && sc !== "All" && br === "All")
            p=stateData.slice(1).reverse().filter((item) => item.subcategory === sc)
        else if (mc === "All" && sc === "All" && br !== "All")
            p=stateData.slice(1).reverse().filter((item) => item.brand === br)
        else if (mc !== "All" && sc !== "All" && br === "All")
            p=stateData.slice(1).reverse().filter((item) => item.maincategory === mc && item.subcategory === sc)
        else if (mc !== "All" && sc === "All" && br !== "All")
            p=stateData.slice(1).reverse().filter((item) => item.maincategory === mc && item.brand === br)
        else if (mc === "All" && sc !== "All" && br !== "All")
            p=stateData.slice(1).reverse().filter((item) => item.brand === br && item.subcategory === sc)
        else
            p=stateData.slice(1).reverse().filter((item) => item.maincategory === mc && item.subcategory === sc && item.brand === br)
        
        setproduct(p.filter((item)=>item.finalprice>=min && item.finalprice<=max))

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
                                    <div className="card p-3">
                                    <div className="section-title mb-1">
                                        <h4>Shop by price</h4>
                                    </div>
                                        <div className="range-slider">
                                            <div className="btn-group">
                                                <div className="mb-3">
                                                    <label>Min</label>
                                                <input type="text" name="min" className='form-control w-100' onChange={getPriceInput} value={min} />
                                                </div>
                                                <div className="mb-3">
                                                <label>Max</label>
                                                <input type="text" name="max" className='form-control w-100' onChange={getPriceInput} value={max}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button onClick={applyPriceFilter} className="btn btn-secondary w-100">Filter</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9">
                            <div className=" row mb-3">
                                <div className="col-md-9 btn-group">
                                <input type="search" name='search' placeholder='Enter Category,Subcategory,Brand color,Size etc to Search:' className='form-control'></input>
                                <button className='btn btn-success'>Search</button>
                                <div className="col-md-3">
                                    <select name="sortFilter" className='form-control'>
                                        <option value='1'>Newset</option>
                                        <option value='2'>Price High to Low</option>
                                        <option value='3'>Price Low to High</option>
                                    </select>
                                </div>
                                </div>
                            </div>
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
