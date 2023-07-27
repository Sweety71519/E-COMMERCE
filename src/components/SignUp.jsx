import React, { useState } from 'react'

export default function SignUp() {
    var [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        password: "",
        cpassword: ""
    })
    function getInputData(e) {
        var { name, value } = e.target.value
        setUser((old) => {
            return {
                ...old,
                [name]: value
            }
        })


    }
    async function postData(e) {
        e.preventDefault()
        // if (data.password === data.cpassword) {
        //     var response = await fetch("/user", {
        //         method: "get",
        //         headers: {
        //             "content-type": "application/json"
        //         }
        //     })
        //     response = await response.json()
        //     // var item=response.slice(1).find((x) => x.username)===data.username{
        //     //     Alert("User Name Already Exist.")
        //     // }
        //     // else{

        //     // }

        // }



    }
    return (
        <div className="container-fluid my-5">
            <div className="w-100">
                <div className="w-50 card py-5 px-3 m-auto">
                    <h5 className='text-center p-3 bg-secondary text-light'><span className='text-warning'>Create</span>Your Account</h5>
                    <form onSubmit={postData}>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label>Full Name</label>
                                <input type="text" name='name' required onChange={getInputData} placeholder='Enter Full Name:' className='form-control'></input>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label>User Name</label>
                                <input type="text" name='username' required onChange={getInputData} placeholder='Enter UserName :' className='form-control'></input>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label>Email</label>
                                <input type="email" name='email' required onChange={getInputData} placeholder='Enter Email Address :' className='form-control'></input>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label>Phone</label>
                                <input type="phone" name='phone' required onChange={getInputData} placeholder='Enter Phone Number :' className='form-control'></input>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label>Password</label>
                                <input type="password" name='password' required onChange={getInputData} placeholder='Enter Password :' className='form-control'></input>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label>Confirm Password</label>
                                <input type="password" name='cpassword' required onChange={getInputData} placeholder='Enter Confirm Password :' className='form-control'></input>
                            </div>
                            <div className='mb-3 w-100'>
                                <button type='submit' className='btn btn-secondary w-50 m-auto'>SignUp</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
