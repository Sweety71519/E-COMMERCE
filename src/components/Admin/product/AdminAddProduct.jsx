import React, { useEffect, useRef, useState } from 'react'
import SideBar from '../SideBar'
import { createProduct, getProduct } from "../../../store/ActionCreators/ProductCategoryActionCreator"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getSubcategory } from '../../../store/ActionCreators/SubCategoryActionCreator'
import { getMaincategory } from '../../../store/ActionCreators/MainCategoryActionCreator'
import { getBrand } from '../../../store/ActionCreators/BrandCategoryActionCreator'
export default function AdminAddProduct() {
    // let [name,setName] = useState("")
    let name = useRef("")
    let dispatch = useDispatch()
    let navigate = useNavigate()
    //let allStateData=useSelector((state)=>state.ProductStateData)
    let allStateData = useSelector((state) => state.ProductStateData)
    let allMaincategoryStateData = useSelector((state) => state.MaincategoryStateData)
    let allSubcategoryStateData = useSelector((state) => state.SubcategoryStateData)
    let allBrandStateData = useSelector((state) => state.BrandStateData)
    console.log("allStateData", allStateData);

    function getInputData(e) {
        name.current = e.target.value
    }
    function postData(e) {
        e.preventDefault()

        let item = allStateData.slice(1).find((item) => item.name == name.current)
        console.log("item", item);
        if (item)
            alert("Product Already Exist!!!")
        else {
            dispatch(createProduct({ name: name.current }))
            navigate("/admin-product")
        }

    }
    function getAPIData() {
        dispatch(getProduct())
        dispatch(getSubcategory())
        dispatch(getMaincategory())
        dispatch(getBrand())
    }
    useEffect(() => {
        getAPIData()

    }, [allStateData.length, allMaincategoryStateData.length, allSubcategoryStateData.length, allBrandStateData.length])
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
                                <input type="text" name="name" onChange={getInputData} placeholder="Enter Product Name" className='form-control'></input>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-6 mb-3">
                                    <label>Maincategory</label>
                                    <select name='maincategory' onChange={getInputData} className='form-control'>
                                        {
                                            allMaincategoryStateData && allMaincategoryStateData.slice(1).reverse().map((item, index) => {
                                                return <option value={item.name}>{item.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-3">
                                    <label>Subcategory</label>
                                    <select name='subcategory' onChange={getInputData} className='form-control'>
                                        {
                                            allSubcategoryStateData && allSubcategoryStateData.slice(1).reverse().map((item, index) => {
                                                return <option value={item.name}>{item.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-3">
                                    <label>Brand</label>
                                    <select name='brand' onChange={getInputData} className='form-control'>
                                        {
                                            allBrandStateData && allBrandStateData.slice(1).reverse().map((item, index) => {
                                                return <option value={item.name}>{item.name}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-lg-3 col-md-6 mb-3">
                                    <label>Stock</label>
                                    <select name='stock' onChange={getInputData} className='form-control'>
                                            <option value='In Stock'>In Stock</option>
                                            <option value='Out of Stock'>Out Of Stock</option>
                                    </select>
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
