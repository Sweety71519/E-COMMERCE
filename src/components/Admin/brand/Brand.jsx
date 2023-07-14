import React, { useEffect, useState } from 'react'
import SideBar from '../SideBar'
import { Link, useParams } from 'react-router-dom'
import { deleteBrand, getBrand } from "../../../store/ActionCreators/BrandCategoryActionCreator"
import { useDispatch, useSelector } from 'react-redux'


export default function AdminBrand() {
  var [data, setData] = useState([])
  var stateData = useSelector((state) => state.BrandStateData)
  var dispatch = useDispatch()
  let {id}=useParams()

  function getAPIData() {
    dispatch(getBrand())
    console.log("stateData----",stateData);
    if (stateData.length) {
      setData(stateData.slice(1).reverse())
    }

  }

  function deleteItem(id){
    if(window.confirm("Sure,You want to Delete record"));
    dispatch(deleteBrand({id:id}))
    getAPIData()
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
          <h5 className='bg-primary p-2 rounded text-light text-center'>Product<Link to="/admin-add-brand" className='fa fa-plus text-light float-right'></Link></h5>

          <div className="table-responsive">

            <table className='table table-bordered'>
              <tbody>
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th></th>
                </tr>
                {
                  data.map((item, index) => {
                    return <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td><Link to={"/admin-update-Brand/"+item.id}> <i className='fa fa-edit' title='Edit' /></Link></td>
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
