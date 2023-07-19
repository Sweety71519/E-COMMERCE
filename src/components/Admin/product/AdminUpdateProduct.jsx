import React, { useEffect, useRef, useState } from 'react'
import SideBar from '../SideBar'
import { updateProduct, getProduct } from "../../../store/ActionCreators/ProductCategoryActionCreator"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getSubcategory } from '../../../store/ActionCreators/SubCategoryActionCreator'
import { getMaincategory } from '../../../store/ActionCreators/MainCategoryActionCreator'
import { getBrand } from '../../../store/ActionCreators/BrandCategoryActionCreator'
export default function AdminUpdateProduct() {
    let {id}=useParams()
    let [data, setData] = useState({
        name: "",
        maincategory: "",
        subcategory: "",
        brand: "",
        color: "",
        size: "",
        baseprice: "",
        discount: "",
        finalprice: "",
        stock: "In Stock",
        description: "This is Sample Prodoct",
        pic1: "",
        pic2: "",
        pic3: "",
        pic4: ""
    })
    // let name = useRef("")
    let dispatch = useDispatch()
    let navigate = useNavigate()
    //let allStateData=useSelector((state)=>state.ProductStateData)
    let allStateData = useSelector((state) => state.ProductStateData)
    let allMaincategoryStateData = useSelector((state) => state.MaincategoryStateData)
    let allSubcategoryStateData = useSelector((state) => state.SubcategoryStateData)
    let allBrandStateData = useSelector((state) => state.BrandStateData)
    console.log("allStateData", allStateData);

    function getInputData(e) {
        var { name, value } = e.target
        setData((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }
    function getInputFile(e) {
        var { name, files } = e.target
        console.log(files);
        setData((old) => {
            return {
                ...old,
                [name]: files[0].name
            }
        })
    }
    function postData(e) {
        e.preventDefault()
        var fp = Math.round(data.baseprice - data.baseprice * data.discount / 100)
        var item = {
            id:id,
            name: data.name,
            maincategory: data.maincategory,
            subcategory: data.subcategory,
            brand: data.brand,
            color: data.color,
            size: data.size,
            description: data.description,
            stock: data.stock,
            baseprice: data.baseprice,
            discount: data.discount,
            finalprice: fp,
            pic1: data.pic1,
            pic2: data.pic2,
            pic3: data.pic3,
            pic4: data.pic4
        }
        dispatch(updateProduct(item))
        navigate("/admin-product")
    }
    function getAPIData() {
        dispatch(getMaincategory())
        dispatch(getSubcategory())
        dispatch(getBrand())
        dispatch(getProduct())
        if (allStateData.length) {
            var item=allStateData.find((item)=>item.id==Number(id))
            setData({...item})
            // setData((old) => {
            //     return {
            //         ...old,
            //         ['maincategory']: allMaincategoryStateData.slice(1).reverse()[0].name,
            //         ['subcategory']: allSubcategoryStateData.slice(1).reverse()[0].name,
            //         ['brand']: allBrandStateData.slice(1).reverse()[0].name
            //     }
            // })
        }
    }
    useEffect(() => {
        getAPIData()
    }, [allStateData.length,allMaincategoryStateData.length, allSubcategoryStateData.length, allBrandStateData.length])
    return (
        <>
            <div className='container-fluid my-3'>
                <div className='row'>
                    <div className="col-md-2">
                        <SideBar />
                    </div>
                    <div className="col-md-10">
                        <h5 className='bg-primary p-2 mb-2 text-light rounded text-center'>Product</h5>
                        <form onSubmit={postData}>
                            <div className="md-3">
                                <label>Name</label>
                                {/* <input type="text" name="name" onChange={(e)=>setName(e.target.value)} value={name} placeholder="Enter Product Name" className='form-control'></input> */}
                                <input type="text" name="name" onChange={getInputData} placeholder="Enter Product Name" className='form-control' value={data.name}></input>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-6 mb-3">
                                    <label>Maincategory</label>
                                    <select name='maincategory' value={data.maincategory} onChange={getInputData} className='form-control'>
                                        {
                                            allMaincategoryStateData && allMaincategoryStateData.slice(1).reverse().map((item, index) => {
                                                return <option value={item.name}>{item.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-3">
                                    <label>Subcategory</label>
                                    <select name='subcategory' value={data.subcategory}  onChange={getInputData} className='form-control'>
                                        {
                                            allSubcategoryStateData && allSubcategoryStateData.slice(1).reverse().map((item, index) => {
                                                return <option value={item.name}>{item.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-3">
                                    <label>Brand</label>
                                    <select name='brand' value={data.brand} onChange={getInputData} className='form-control'>
                                        {
                                            allBrandStateData && allBrandStateData.slice(1).reverse().map((item, index) => {
                                                return <option value={item.name}>{item.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-3">
                                    <label>Stock</label>
                                    <select name='stock' value={data.stock}  onChange={getInputData} className='form-control'>
                                        <option value='In Stock'>In Stock</option>
                                        <option value='Out of Stock'>Out Of Stock</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label>Color</label>
                                    <input type="text" name="color" value={data.color} onChange={getInputData} placeholder='Enter Color : ' className='form-control' />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label>Size</label>
                                    <input type="text" name="size" value={data.size} onChange={getInputData} placeholder='Enter Size : ' className='form-control' />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label>Base Price</label>
                                    <input type="number" name="baseprice" value={data.baseprice} onChange={getInputData} placeholder='Enter Base Price : ' className='form-control' />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label>Discount</label>
                                    <input type="number" name="discount" value={data.discount}  onChange={getInputData} placeholder='Enter Discount : ' className='form-control' />
                                </div>
                            </div>

                            <div className="mb-3">
                                <label>Description</label>
                                <textarea name="description"  value={data.description} onChange={getInputData} rows="5" className='form-control' placeholder='Description....'></textarea>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label>Pic1</label>
                                    <input type="file" name="pic1"  onChange={getInputFile} className='form-control' />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label>Pic2</label>
                                    <input type="file" name="pic2" onChange={getInputFile} className='form-control' />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label>Pic3</label>
                                    <input type="file" name="pic3" onChange={getInputFile} className='form-control' />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label>Pic4</label>
                                    <input type="file" name="pic4" onChange={getInputFile} className='form-control' />
                                </div>
                            </div>
                            <div className="mb-3 btn-group w-100">
                                <button type='reset' className='btn btn-secondary w-50'>Reset</button>
                                <button type='submit' className='btn btn-primary w-50'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
