import React from 'react'

export default function Contact() {
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
                                            <p>160 Pennsylvania Ave NW, Washington, Castle, PA 16101-5161</p>
                                        </li>
                                        <li>
                                            <h6><i className="fa fa-phone"></i> Phone</h6>
                                            <p><span>125-711-811</span><span>125-668-886</span></p>
                                        </li>
                                        <li>
                                            <h6><i className="fa fa-headphones"></i> Support</h6>
                                            <p>Support.photography@gmail.com</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="contact__form">
                                    <h5>SEND MESSAGE</h5>
                                    <form action="#">
                                        <input type="text" placeholder="Name" />
                                        <input type="text" placeholder="Email" />
                                        <input type="text" placeholder="Website" />
                                        <textarea placeholder="Message"></textarea>
                                        <button type="submit" className="site-btn">Send Message</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="contact__map">
                                <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=a-43%20sector%2016%20noda&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Contact Section End --></div> */}
        </>
    )
}
