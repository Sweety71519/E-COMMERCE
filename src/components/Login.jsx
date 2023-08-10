import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  var navigate = useNavigate()
  var [user, setUser] = useState({
    username: "",
    password: ""
  })
  function getInputData(e) {
    console.log("user", e.target);
    var { name, value } = e.target
    setUser((old) => {
      return {
        ...old,
        [name]: value
      }
    })


  }
  async function postData(e) {
    e.preventDefault()
      var response = await fetch("http://localhost:8000/user", {
        method: "get",
        headers: {
          "content-type": "application/json"
        }
      })
      response = await response.json()
      console.log("response",response);
      var item = response.slice(1).find((x) => x.username === user.username && x.password===user.password)
      console.log("item",item);
      if (item) {
        localStorage.setItem("login",true)
        localStorage.setItem("username",item.username)
        localStorage.setItem("name",item.name)
        localStorage.setItem("userid",item.id)
        localStorage.setItem("role",item.role)
        console.log("userDetails",localStorage.getItem("userid",item));
        if(item.role==='Admin')
        navigate("/admin")
        else
        navigate("/profile")


      }
      else {
        alert("Invalid User Name or Password")
        }
        // response = await fetch("http://localhost:8000/user", {
        //   method: "post",
        //   headers: {
        //     "content-type": "application/json"
        //   },
        //   body: JSON.stringify(item)
        // })
        // response = await response.json()
        // navigate("/login")
      }





  return (
    <div className="container-fluid my-5">
      <div className="w-100">
        <div className="w-50 card py-5 px-3 m-auto">
          <h5 className='text-center p-3 bg-secondary text-light'><span className='text-warning'>Login</span> to Your Account</h5>
          <form onSubmit={postData}>
            <div className="mb-3">
              <label>User Name</label>
              <input type="text" name='username' required onChange={getInputData} placeholder='Enter UserName :' className='form-control'></input>
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input type="password" name='password' required onChange={getInputData} placeholder='Enter Password :' className='form-control'></input>
            </div>
            <div className='mb-3 w-100'>
              <button type='submit' className='btn btn-secondary w-100'>Login</button>
            </div>
          </form>
          <div className='d-flex justify-content-between'>
          <Link to="/forget-password">Forget Password </Link>
          <Link to="/singup">doesn't have an Account? signup </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
