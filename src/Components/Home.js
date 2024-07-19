 import React from 'react';
 import Navbar from './Navbar';
 import Bannerbackground from "../Assets/home-banner-background.png";
 import BannerImage from "../Assets/home-banner-image.png";
 import {FiArrowRight} from "react-icons/fi";

 const Home = () => {
   return (
     <div className='home-container'>
        <Navbar/>
        <div className='home-banner-container'> 
            <div className='home-bannerImage-container'>
              <img src={Bannerbackground} alt='' />
            </div>

        </div>
     </div>
   )
 }
 
 export default Home
 