

import React from 'react'
import '../banner/banner.css'
import Pera from '../../components/Pera'
import Img from '../../components/img'
import Bttn from '../../components/Bttn'



const Banner = () => {
  return (
    

    <section id="banner">
        <div className="container">
            <div className="banner_wrapper">
                <div className="banner_content">
                    <h1>Professional task manager tool to grow </h1>
                    <Pera style="peragraph effect" text="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime."/>
                    <form action="" method="">
                        <input type="search" name="search" placeholder="Join with us using your gmail address"/>
                        <Bttn style="common_btn" type="submit" text="sign up"/>
                    </form>
                </div>
                <div className="banner_img">
                    <Img src="./images/banner-Cards.png" alt="not found" loding="lazy"/>
                </div>
            </div>
        </div>
    </section>

  )
}

export default Banner