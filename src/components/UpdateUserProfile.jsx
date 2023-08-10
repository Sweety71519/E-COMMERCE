import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function UpdateUserProfile() {
    var navigate=useNavigate()
    var [user, setUser] = useState({
        name: "",
        email: "",
        address:"",
        phone:"",
        state:"",
        pin:"",
        city:"",
        pic:""
    })
    async function getInputData(e) {
        console.log("user",e.target );
        var { name, value } = e.target
        setUser((old) => {
            return {
                ...old,
                [name]: value
            }
        })


    }

    async function getInputFile(e) {
        var { name, files} = e.target
        setUser((old) => {
            return {
                ...old,
                [name]: files[0].name
            }
        })


    }

    async function postData(e) {
        e.preventDefault()
            var response = await fetch("http://localhost:8000/user/"+localStorage.getItem("userid"),{
                method: "put",
                headers: {
                    "content-type": "application/json"
                },
                body:JSON.stringify({...user})
            })
            console.log("data.....",response);
         if(user.role==='Admin')
         navigate("/admin")
         else
         navigate("/profile")
    }
    async function getApiData(){
        var response=await fetch("http://localhost:8000/user/"+localStorage.getItem("userid"),{
            method:"get",
            headers:{
                "content-type":"application/json"
            }

        })
        response= await response.json()
        setUser(response)

    }
    useEffect(()=>{
        getApiData()

    },[])
    return (
        <div className="container-fluid my-5">
            <div className="w-100">
                <div className="w-50 card py-5 px-3 m-auto">
                    <h5 className='text-center p-3 bg-secondary text-light'><span className='text-warning'>Update</span>Profile</h5>
                    <form onSubmit={postData}>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label>Full Name</label>
                                <input type="text" name='name'   onChange={getInputData} placeholder='Enter Full Name:' className='form-control' value={user.name}></input>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label>Pic</label>
                                <input type="file" name='pic' onChange={getInputFile}className='form-control'></input>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label>Email</label>
                                <input type="email" name='email' onChange={getInputData} placeholder='Enter Email :' className='form-control' value={user.email}></input>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label>Phone</label>
                                <input type="phone" name='phone'  onChange={getInputData} placeholder='Enter Phone Number :' className='form-control' value={user.phone}></input>
                            </div>
                            <div className="mb-3 w-100">
                                <label>Address</label>
                                <textarea name='address' row='2' className='form-control' onChange={getInputData} value={user.address} placeholder='Address...'></textarea>
                            </div>
                            <div className="row">
                            <div className="col-lg-4 col-md-6 mb-3">
                                <label>Pin</label>
                                <input type="number" name='pin'  onChange={getInputData} placeholder='Enter Pin :' className='form-control' value={user.pin}></input>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-3">
                                <label>City</label>
                                <input type="text" name='city'  onChange={getInputData} placeholder='Enter City :' className='form-control' value={user.city}></input>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-3">
                                <label>State</label>
                                <input type="text" name='state'  onChange={getInputData} placeholder='Enter State :' className='form-control' value={user.state}></input>
                            </div>
                            </div>
                            <div className='mb-3 w-100'>
                                <button type='submit' className='btn btn-secondary w-100'>Update</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
