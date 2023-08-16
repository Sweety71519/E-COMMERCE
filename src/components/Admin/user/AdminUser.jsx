import React, { useEffect, useState } from 'react'
import SideBar from '../SideBar'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'


export default function AdminUser() {
  var [data, setData] = useState([])
  var dispatch = useDispatch()
  let {id}=useParams()

  async function getAPIData() {
    var response = await fetch("http://localhost:8000/user", {
            method: "get",
            headers: {
                "content-type": "application/json"
            }

        })
        response= await response.json()
        setData(response.slice(1))

  }

  async function deleteItem(id){
    if(window.confirm("Sure,You want to Delete record"));
    var response = await fetch("http://localhost:8000/user"+id, {
            method: "delete",
            headers: {
                "content-type": "application/json"
            }

        })
        response= await response.json()
        getAPIData()


  }

  useEffect(() => {
    getAPIData()

  }, [data.length])
  return (
    <div className="container-fluid my-3">
      <div className="row">
        <div className="col-md-2">
          <SideBar />
        </div>
        <div className="col-md-10">
          <h5 className='bg-primary p-2 rounded text-light text-center'>Users</h5>

          <div className="table-responsive">

            <table className='table table-bordered'>
              <tbody>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>UserName</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th></th>
                </tr>
                {
                  data.map((item, index) => {
                    return <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.username}</td>
                      <td>{item.phone}</td>
                      <td>{item.email}</td>
                      <td>{item.role}</td>
                      <td><button className="btn text-primary" onClick={()=>deleteItem(item.id)}><i className='fa fa-trash' title='Delete'/></button></td>

                    </tr>

                  })
                }
              </tbody>
            </table>
          </div>
          <div className="row mt-3">
            <div className="col-md-6">
            </div>
            <div className="col-md-6">
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
