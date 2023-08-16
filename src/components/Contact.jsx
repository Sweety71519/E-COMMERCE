import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {createContact} from '../store/ActionCreators/ContactActionCreator'

export default function Contact() {
    var [data,setData]=useState({
        name:"",
        email:"",
        phone:"",
        subject:"",
        message:"",
        status:"Active"
    })
    var dispatch=useDispatch()
    function getInputData(e){
        var {name,value}=e.target 
        setData((old)=>{
            return{
                ...old,
                [name]:value
            }

        })

    }
    function postData(e){
     e.preventDefault()
     var date=new Date()
     dispatch(createContact({...data,date:date.toLocaleDateString()}))
     alert("Thanks to Shear Your Query With Us!!! Our Team Will Contact You Soon")
     setData({
        name:"",
        email:"",
        phone:"",
        subject:"",
        message:"",
        status:"Active"
     })
    }
    return (
        <>
            {/* <!-- Breadcrumb Begin --> */}
            <div className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__links">
                                <a href="./index.html"><i className="fa fa-home"></i> Home</a>
                                <span>Contact</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Breadcrumb End --> */}

            {/* <!-- Contact Section Begin --> */}
            <section className="contact spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="contact__content">
                                <div className="contact__address">
                                    <h5>Contact info</h5>
                                    <ul>
                                        <li>
                                            <h6><i className="fa fa-map-marker"></i> Address</h6>
                                            <p>Sector 12-22,Noida,UP,India</p>
                                        </li>
                                        <li>
                                            <h6><i className="fa fa-phone"></i> Phone</h6>
                                            <p><span><a href="tel:8969273127" className='text-dark'>8969273127</a></span></p>
                                        </li>
                                        <li>
                                            <h6><i className="fa fa-headphones"></i> Support</h6>
                                            <p><span><a href="mailto:sweety71519@gmail.com" className='text-dark'>sweety71519@gmail.com</a></span></p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="contact__form">
                                    <h5>SEND MESSAGE</h5>
                                    <form onSubmit={postData}>
                                        <input type="text" name="name"  value={data.name} onChange={getInputData} placeholder="Name" />
                                        <input type="text" name="email" value={data.email} onChange={getInputData} placeholder="Email" />
                                        <input type="text" name="phone" value={data.phone} onChange={getInputData} placeholder="Phone" />
                                        <input type="text" name="subject" value={data.subject} onChange={getInputData} placeholder="Subject" />
                                        <textarea value={data.message} name="message" onChange={getInputData} placeholder="Message"></textarea>
                                        <button type="submit" className="site-btn">Send Message</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="contact__map">
                                <div className="mapouter">
                                    <div className="gmap_canvas">
                                        <div className="mapouter"><div className="gmap_canvas">
                                            <iframe height='500' width='600' className="gmap_iframe" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=sector 12-22 noida,UP,india&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                                            </iframe></div></div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Contact Section End --></div> */}
        </>
    )
}
