import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SideBar from './SideBar'

export default function AdminHome() {
  var [user, setUser] = useState({
    img: ""
  })
  async function getAPIData() {
    var response = await fetch("http://localhost:8000/user", {
      method: "get",
      headers: {
        "content-type": "application/json"
      }

    })
    response = await response.json()
    var item = response.find((x) => x.id === Number(localStorage.getItem("userid")))
    console.log("item", item);
    if (item)
      setUser(item)

  }
  useEffect(() => {
    getAPIData()
  }, [])
  return (
    <div className="container-fluid my-3">
      <div className="row">
        <div className="col-md-2">
          <SideBar />
        </div>
        <div className="col-md-10">
          <h5 className='bg-primary p-2 rounded text-light text-center'>Admin Home</h5>
          <div className="row mt-3">
            <div className="col-md-6">
              {
                user.pic ?
                  <img src={`/images/${user.pic}`} height="300px" width="100%" alt=""></img> :
                  <img src={`/images/No_Image_Available.jpg`} height="300px" width="100%" alt=""></img>
              }
            </div>
            <div className="col-md-6">
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <th>Name</th>
                    <td>{user.name}</td>
                  </tr>
                  <tr>
                    <th>User Name</th>
                    <td>{user.username}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{user.email}</td>
                  </tr>
                  <tr>
                    <th>Phone</th>
                    <td>{user.phone}</td>
                  </tr>
                  <tr>
                    <th></th>
                    <th colSpan={2} className="btn btn-primary w-100"><Link to="/update-profile" className='text-light'>Update Profile</Link></th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
