import React, { useState,useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {createNewslatter,getNewslatter} from '../store/ActionCreators/NewsLatterActionCreator'

export default function Footer() {
    var [email,setEmail]=useState("")
    var dispatch = useDispatch()
    var allNewsLatterData = useSelector((state) => state.NewsLatterStateData)
    console.log("allNewsLatterData",allNewsLatterData.length);
    function postData(e){
        console.log("call function");
           e.preventDefault()
           var item=allNewsLatterData.slice(1).find((x) => x.email === email)
           if(item)
           alert("Your Id is Already Subscribe !!!")
           else{
           dispatch(createNewslatter({email:email}))
           console.log("newslatter---2");
           alert("Thanks For Subscribe Our Team Will Contact You Soon!!")
           setEmail("")
        }

    }

    
    function getAPIData(){
        dispatch(getNewslatter())

    }


    useEffect(() => {
        getAPIData()
    },[allNewsLatterData?.length])
    return (
        <>
            <hr />
            {/*  Footer Section Begin */}
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-7">
                            <div className="footer__about">
                                <div className="footer__logo">
                                    <a href="./index.html"><img src="/img/logo.png" alt="" /></a>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    cilisis.</p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-5">
                            <div className="footer__widget">
                                <h6>Menu</h6>
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/about">About</a></li>
                                    <li><a href="/shop/All/All/All">Shop</a></li>
                                    <li><a href="/contact">contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-8 col-sm-8">
                            <div className="footer__newslatter">
                                <h6>NEWSLETTER</h6>
                                <form onSubmit={postData}>
                                    <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Email" value={email} />
                                    <button type="submit" className="site-btn">Subscribe</button>
                                </form>
                                <div className="footer__social">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-youtube-play"></i></a>
                                    <a href="#"><i className="fa fa-instagram"></i></a>
                                    <a href="#"><i className="fa fa-pinterest"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    </div>
                </div>
            </footer>
            {/*  Footer Section End */}
        </>
    )
}
