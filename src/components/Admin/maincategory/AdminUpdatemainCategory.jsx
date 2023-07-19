import React, { useEffect, useRef, useState } from 'react'
import SideBar from '../SideBar'
import { getMaincategory, updateMaincategory } from "../../../store/ActionCreators/MainCategoryActionCreator"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
export default function AdminUpdatemainCategory() {
    let {id}=useParams()
    let [name,setName] = useState("")
    let dispatch=useDispatch()
    let navigate=useNavigate()
    let allStateData = useSelector((state) => state.MaincategoryStateData)


   //"allStateData",allStateData);

    function getInputData(e) {
        setName(e.target.value)
    }
    function postData(e) {
        e.preventDefault()
        
        let item=allStateData.slice(1).find((item)=>item.name==name.current)
        if(item)
        alert("MainCategory Already Exist!!!")
        else{
            dispatch(updateMaincategory({id:id,name:name}))
            navigate("/admin-maincategory")
        }

    }
    function getAPIData(){
        dispatch(getMaincategory())
        if(allStateData.length){
            let item=allStateData.find((item)=>item.id===Number(id))
           //"item----2",item);
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
                        <h5 className='bg-primary p-2 mb-2 text-light rounded text-center'>MainCategory</h5>
                        <form onSubmit={postData}>
                            <div className="md-3">
                                <label>Name</label>
                                {/* <input type="text" name="name" onChange={(e)=>setName(e.target.value)} value={name} placeholder="Enter Maincategory Name" className='form-control'></input> */}
                                <input type="text" name="name" onChange={getInputData}  placeholder="Enter Maincategory Name" className='form-control' value={name}></input>
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
