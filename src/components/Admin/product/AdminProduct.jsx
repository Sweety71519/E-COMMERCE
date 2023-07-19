import React, { useEffect, useState } from 'react'
import SideBar from '../SideBar'
import { Link } from 'react-router-dom'
import { deleteProduct, getProduct } from "../../../store/ActionCreators/ProductCategoryActionCreator"
import { useDispatch, useSelector } from 'react-redux'


export default function AdminProduct() {
  var [data, setData] = useState([])
  var stateData = useSelector((state) => state.ProductStateData)
  var disptach = useDispatch()
  function getAPIData() {
    disptach(getProduct())
    console.log(stateData);
    if (stateData.length) {
      setData(stateData.slice(1).reverse())
      console.log("data---", data);
    }
  }
  function deleteItem(id) {
    if (window.confirm("Are You Sure to Delete that Item : ")) {
      disptach(deleteProduct({ id: id }))
      getAPIData()
    }
  }
  useEffect(() => {
    getAPIData()
  }, [stateData.length])
  // var [data, setData] = useState([])
  // var stateData = useSelector((state) => state.ProductStateData)
  // var dispatch = useDispatch()
  // let {id}=useParams()

  // function getAPIData() {
  //   dispatch(getProduct())
  //   if (stateData.length) {
  //     setData(stateData.slice(1).reverse())
  //   }

  // }

  // function deleteItem(id){
  //   if(window.confirm("Sure,You want to Delete record"));
  //   dispatch(deleteProduct({id:id}))
  //   getAPIData()
  // }

  // useEffect(() => {
  //   getAPIData()

  // }, [stateData.length])
  return (
    <div className='container-fluid my-3'>
      <div className="row">
        <div className="col-md-2">
          <SideBar />
        </div>
        <div className="col-md-10">
          <h5 className='bg-primary p-2 text-light rounded text-center'>Product <Link to="/admin-add-Product" className='fa fa-plus text-light float-right'></Link></h5>
          <div className="table-responsive">
            <table className='table table-bordered'>
              <tbody>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Color/Size</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
                {
                  data.map((item, index) => {
                    return <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.maincategory}/{item.subcategory}/{item.brand}</td>
                      <td>{item.color}/{item.size}</td>
                      <td><del className='text-danger'>&#8377;{item.baseprice}</del> &#8377;{item.finalprice} <span className='text-success'>{item.discount} % Off</span></td>
                      <td>{item.stock}</td>
                      <td><a href={`/images/${item.pic1}`} rel="noreferrer" target='_blank'><img src={`/images/${item.pic1}`} height="60px" width="100px" alt="" /></a></td>
                      <td><a href={`/images/${item.pic2}`} rel="noreferrer" target='_blank'><img src={`/images/${item.pic2}`} height="60px" width="100px" alt="" /></a></td>
                      <td><a href={`/images/${item.pic3}`} rel="noreferrer" target='_blank'><img src={`/images/${item.pic3}`} height="60px" width="100px" alt="" /></a></td>
                      <td><a href={`/images/${item.pic4}`} rel="noreferrer" target='_blank'><img src={`/images/${item.pic4}`} height="60px" width="100px" alt="" /></a></td>
                      <td><Link to={"/admin-update-product/"+item.id}><i className='fa fa-edit' title='Edit'></i></Link></td>
                      <td><button className='btn text-primary' onClick={()=>deleteItem(item.id)}><i className='fa fa-trash' title='Delete'></i></button></td>
                    </tr>
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
