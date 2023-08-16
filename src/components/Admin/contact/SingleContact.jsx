import React, { useEffect, useState } from 'react'
import SideBar from '../SideBar'
import {  useNavigate, useParams } from 'react-router-dom'
import { deleteContact, getContact, updateContact } from "../../../store/ActionCreators/ContactActionCreator"
import { useDispatch, useSelector } from 'react-redux'


export default function AdminSingleContact() {
  var [data, setData] = useState([])
  var {id}=useParams()
  var navigate=useNavigate()
  var stateData = useSelector((state) => state.ContactStateData)
  var dispatch = useDispatch()
  var {id}=useParams()

  function getAPIData() {
    dispatch(getContact())
   
    if (stateData.length) {
        var item=stateData.slice(1).find((x)=>x.id===Number(id))
      setData(item??[])
    }

  }

  function updateItem(){
    dispatch(updateContact({...data,status:"Done"}))
    setData({...data,status:"Done"})
  }

  function deleteItem(id){
    if(window.confirm("Sure,You want to Delete record"));
    dispatch(deleteContact({id:id}))
    navigate("/admin-contact")
  }

  useEffect(() => {
    getAPIData()

  }, [stateData.length])
  return (
    <div className="container-fluid my-3">
      <div className="row">
        <div className="col-md-2">
          <SideBar />
        </div>
        <div className="col-md-10">
          <h5 className='bg-primary p-2 rounded text-light text-center'>Contacts</h5>

          <div className="table-responsive">

            <table className='table table-bordered'>
              <tbody>
                <tr>
                    <th>Id</th>
                    <td>{data.id}</td>
                </tr>
                <tr>
                    <th>Name</th>
                    <td>{data.name}</td>
                </tr>
                <tr>
                    <th>Subject</th>
                    <td>{data.subject}</td>
                </tr>
                <tr>
                    <th>Phone</th>
                    <td>{data.phone}</td>
                </tr>             
                <tr>
                    <th>Date</th>
                    <td>{data.date}</td>
                </tr>
                <tr>
                    <th>Message</th>
                    <td>{data.message}</td>
                </tr>
                <tr>
                    <th>Status</th>
                    <td>{data.status}{data.status==="Active"?<button className='btn btn-primary float-right' onClick={updateItem}>Update Status to Done</button>:""}</td>
                </tr>
               {
                data.status==="Done"?
                <tr>
                <th colSpan={2}><button className='btn btn-danger' onClick={deleteItem}>Delete</button></th>
              </tr>:""
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
