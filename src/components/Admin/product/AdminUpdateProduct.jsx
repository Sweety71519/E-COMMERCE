import React, { useEffect, useRef, useState } from 'react'
import SideBar from '../SideBar'
import { getProduct, updateProduct } from "../../../store/ActionCreators/ProductCategoryActionCreator"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
export default function AdminUpdateProduct() {
    let {id}=useParams()
    let [name,setName] = useState("")
    let dispatch=useDispatch()
    let navigate=useNavigate()
    let allStateData = useSelector((state) => state.ProductStateData)


    console.log("allStateData",allStateData);

    function getInputData(e) {
        setName(e.target.value)
    }
    function postData(e) {
        e.preventDefault()
        
        let item=allStateData.slice(1).find((item)=>item.name==name.current)
        if(item)
        alert("Product Already Exist!!!")
        else{
            dispatch(updateProduct({id:id,name:name}))
            navigate("/admin-product")
        }

    }
    function getAPIData(){
        dispatch(getProduct())
        if(allStateData.length){
            let item=allStateData.find((item)=>item.id===Number(id))
            console.log("item----2",item);
            if(item)
            setName(item.name)
        }
    }
    useEffect(()=>{
        getAPIData()

    },[allStateData.length])
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
                                <input type="text" name="name" onChange={getInputData}  placeholder="Enter Product Name" className='form-control' value={name}></input>
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
