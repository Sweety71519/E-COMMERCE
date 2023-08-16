import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteWishlist, getWishlist } from '../store/ActionCreators/WishListActionCreator'
import { getCheckOut } from '../store/ActionCreators/CheckOutActionCreator'

export default function Profile() {
    var [user, setUser] = useState({
        img: ""
    })
    let [wishlist, setWishlist] = useState([])
    let [checkout, setCheckOut] = useState([])

    let allWishlistStateData = useSelector((state) => state.WishListStateData)
    let allCheckOutStateData = useSelector((state) => state.CheckOutStateData)

    let dispatch = useDispatch()

    function deleteItem(id) {
        dispatch(deleteWishlist({ id: id }))
        getAPIData()
    }
    async function getAPIData() {
        dispatch(getWishlist())
        dispatch(getCheckOut())
        if (allWishlistStateData?.length) {
            setWishlist(allWishlistStateData.slice(1).reverse().filter((x) => x.userid === localStorage.getItem("userid")))
        }
        if (allCheckOutStateData?.length) {
            setCheckOut(allCheckOutStateData.slice(1).reverse().filter((x) => x.userid === localStorage.getItem("userid")))
        }
        var response = await fetch("http://localhost:8000/user", {
            method: "get",
            headers: {
                "content-type": "application/json"
            }

        })
        response = await response.json()
        var item = response.find((x) => x.id === Number(localStorage.getItem("userid")))
        if (item)
            setUser(item)

    }
    useEffect(() => {
        getAPIData()
    }, [allWishlistStateData?.length])
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 mt-3">
                    {
                        user.pic ?
                            <img src={`/images/${user.pic}`} height="500px" width="100%" alt=""></img> :
                            <img src={`/images/No_Image_Available.jpg`} height="500px" width="100%" alt=""></img>
                    }
                </div>
                <div className="col-md-6">
                    <h5 className='bg-secondary text-light p-2 text-center mt-3'>Buyer Profile</h5>
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
                                <th>Address</th>
                                <td>{user.address}</td>
                            </tr>
                            <tr>
                                <th>Pin</th>
                                <td>{user.pin}</td>
                            </tr>
                            <tr>
                                <th>State</th>
                                <td>{user.state}</td>
                            </tr>
                            <tr>
                                <th>City</th>
                                <td>{user.city}</td>
                            </tr>
                            <tr>
                                <th></th>
                                <td colSpan={2} className="btn btn-secondary w-100 btn-sm"><Link to="/update-profile" className='text-light'>Update Profile</Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {
                wishlist.length ?
                    <>
                        <div className="my-3 card p-5">
                            <h5 className="text-center p-4">
                                <div className="table-responsive">
                                    <table className='table'>
                                        <tbody>
                                            <tr>
                                                <th></th>
                                                <th>Name</th>
                                                <th>Brand/Color/Size</th>
                                                <th>Price</th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                            {
                                                wishlist.map((item, index) => {
                                                    return <tr key={index}>
                                                        <td><a href={`/images/${item.pic}`} target="_blank" rel='noerror'>
                                                            <img src={`/images/${item.pic}`} alt="" height="80px" width="80px" className='rounded'></img>
                                                        </a></td>
                                                        <td>{item.name}</td>
                                                        <td>{item.brand}/{item.color}/{item.size}</td>
                                                        <td>{item.price}</td>
                                                        <td><Link to={`/single-product/${item.productid}`}><i className='fa fa-shopping-cart text-secondary'></i></Link></td>
                                                        <td><button className='btn' onClick={() => deleteItem(item.id)}><i className='fa fa-trash text-secondary'></i></button></td>
                                                    </tr>

                                                }
                                                )}
                                        </tbody>
                                    </table>
                                </div>
                            </h5>
                        </div>
                    </>
                    :
                    <div className="my-3 card p-5 text-center">
                        <p>No Item in wishlist</p>
                    </div>
            }
            {
                allCheckOutStateData.length ?
                    <>
                        <h5 className='text-center my-4'> Order History Section</h5>
                        {
                            checkout.map((item, index) => {
                                return <div className='row mb-3' key={index}>
                                    <div className="col-md-4 cart__total__procced">
                                        <div className="table-responsive">
                                            <thead>
                                                <table className='table'>
                                                    <tr>
                                                        <th>Order Id</th>
                                                        <td>{item.id}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Payment Mode</th>
                                                        <td>{item.paymentstatus}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Order Status</th>
                                                        <td>{item.orderStatus}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Subtotal</th>
                                                        <td>&#8377;{item.subtotal}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Shipping</th>
                                                        <td>&#8377;{item.shipping}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Total</th>
                                                        <td>&#8377;{item.total}</td>
                                                    </tr>
                                                    <tr>
                                                        <th>Date</th>
                                                        <td>{item.date}</td>
                                                    </tr>
                                                </table>
                                            </thead>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="table-responsive">
                                            <table className='table'>
                                                <tbody>
                                                    <tr>
                                                        <th></th>
                                                        <th>Name</th>
                                                        <th>Brand/Color/Size</th>
                                                        <th>Price</th>
                                                        <th>Qty</th>
                                                        <th>Total</th>
                                                    </tr>
                                                    {
                                                        item.products.map((item, index) => {
                                                            return <tr key={index}>
                                                                <td><a href={`/images/${item.pic}`} target="_blank" rel='noerror'>
                                                                    <img src={`/images/${item.pic}`} alt="" height="80px" width="80px" className='rounded'></img>
                                                                </a></td>
                                                                <td>{item.name}</td>
                                                                <td>{item.brand}/{item.color}/{item.size}</td>
                                                                <td>&#8377;{item.price}</td>
                                                                <td>{item.qty}</td>
                                                                <td>&#8377;{item.total}</td>
                                                            </tr>

                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </div>

                                    </div>
                                </div>
                            })
                        }
                    </>
                    :
                    <div className="my-3 card p-5 text-center">
                        <p>No Order History</p>
                    </div>
            }

        </div>
    )
}
