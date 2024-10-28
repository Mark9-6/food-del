import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets.js'


function Footer() {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint autem fuga nulla deleniti! Fugit, illum, necessitatibus quasi, id voluptates quod quaerat facilis quia a vero iure aliquid reiciendis commodi accusamus?</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                 <h2>COMPANY</h2>
                 <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                 </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-291-961-910</li>
                        <li>contact@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <p className="footer-copyright">Copyright 2024 @tomato - All Rights Reserved</p>
        </div>
    )
}

export default Footer