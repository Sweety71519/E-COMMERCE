import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { getCart, updateCart,deleteCart } from "../store/ActionCreators/CartActionCreator";
import {createCheckOut,getCheckOut} from "../store/ActionCreators/CheckOutActionCreator"
export default function Checkout() {
    var [user, setUser] = useState({
        img: ""
    })
    let [mode,setMode]=useState()
    let [cart,setCart]=useState([])
    let [total,setTotal]=useState(0)
    let [subtotal,setSubTotal]=useState(0)
    let [shipping,setShipping]=useState(0)
    let dispatch = useDispatch()
    let navigate=useNavigate()

    let allCartStateData = useSelector((state) => state.CartStateData)
    function placeOrder(){
        var date=new Date()
        var item={
            userid:localStorage.getItem("userid"),
            paymentmode:mode,
            paymentstatus:"Pending",
            orderStatus:"Order is Placeded",
            subtotal:subtotal,
            shipping:shipping,
            total:total,
            date:date.toLocaleDateString(),
            products:cart
            
        }
        dispatch(createCheckOut(item))
        for(item of cart){
            dispatch(deleteCart({id:item.id}))
        }
        navigate("/confirmation")
    }

    async function getAPIData() {
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
            dispatch(getCart())
            if(allCartStateData?.length){
                var items = allCartStateData?.slice(1).reverse().filter((x) =>x.userid === localStorage.getItem("userid"))
                setCart(items)
                let subtotal=0
                let shipping=0
                let total =0
                for(let item of items){
                    subtotal=subtotal+item.total
                }
                if(subtotal > 0 && subtotal < 1000)
                    shipping = 150
                    total= subtotal + shipping
                    setTotal(total)
                    setSubTotal(subtotal)
                    setShipping(shipping)
            }

    }
    useEffect(() => {
        getAPIData()
    }, [allCartStateData?.length])
    return (
        <>
            {/*  Breadcrumb Begin  */}
            <div className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__links">
                                <a href="./index.html"><i className="fa fa-home"></i> Home</a>
                                <span>Shopping cart</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  Breadcrumb End  */}

            {/*  Checkout Section Begin  */}
            <section className="checkout ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h5 className='text-center'>Billing detail</h5>
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
                        <div className="col-md-6">
                            <div className="checkout__order">
                                <h5>Your order</h5>
                                <div className="checkout__order__product">
                                    <ul>
                                        <li>
                                            <span className="top__text">Product</span>
                                            <span className="top__text__right">Total</span>
                                        </li>
                                      {
                                        cart.map((item,index)=>{
                                            return  <li key={index}>{index+1}. {item.name}(&#8377;{item.price}X{item.qty}) <span>&#8377;{item.total}</span></li>
                                        })
                                      }
                                    </ul>
                                </div>
                                <div className="checkout__order__total">
                                    <ul>
                                        <li>Subtotal <span>&#8377;{subtotal}</span></li>
                                        <li>Shipping <span>&#8377;{shipping}</span></li>
                                        <li>Total <span>&#8377;{total}</span></li>
                                    </ul>
                                </div>
                                <div className="checkout__order__widget">
                                    <label>Payment Mode</label>
                                    <select name='mode' className='form-control' onChange={(e)=>setMode(e.target.value)}>
                                        <option value="COD">COD</option>
                                        <option value="NetBanking">NetBanking/Card/UPI</option>
                                    </select>
                                </div>
                                <button type="submit" className="site-btn" onClick={placeOrder}>Place oder</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*  Checkout Section End  */}
        </>
    )
}
