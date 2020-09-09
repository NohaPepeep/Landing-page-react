import React, { Component } from 'react';
import index3 from './index3.css';
import facebook from './images/facebook.png';
import twitter from './images/twitter.png';
import instagram from './images/instagram.png';

const Footer = () =>{
    return (
    <div>
    <p className="p-style">W5723 Lake View Chester, CA 96020</p>
    <p className="p-style">Design by <span className = "span-style">Papaya.</span></p>
    <img src={facebook} alt="Facebook icon" className="img-style" />
    <img src={twitter} alt="Twitter icon" className="img-style" />
    <img src={instagram} alt="Instagram icon" className="img-style" />
    <p className="p-style">&copy; Camp Chippewa</p>
    </div>
    );
  }

export default Footer;