
import React from 'react'
import '../navbar/navbar.css'
import Menu from '../../components/Menu'
import Btn from '../../components/Btn'
import Img from '../../components/img'



const Navbar = () => {
  return (
    <nav id="navbar">
    <div className="container">
        <div className="nav_wrapper">
            <div className="logo">
            <Img src="images/Logo.png" alt="Not Found" loading="lazy"/>
            </div>
            <div className="manu">
                <ul>
                    <Menu lktxt="#" text="home" icname="fa-solid fa-angle-down"/>
                    <Menu lktxt="#" text="about" icname="fa-solid fa-angle-down"/>
                    <Menu lktxt="#" text="service" icname="fa-solid fa-angle-down"/>
                    <Menu lktxt="#" text="portfolio" icname="fa-solid fa-angle-down"/>
                    <Menu lktxt="#" text="price" icname="fa-solid fa-angle-down"/>
                    <Menu lktxt="#" text="blog" icname="fa-solid fa-angle-down"/>
                </ul>
            </div>
            <Btn nvbtn="nav_btn" cmnbtn="common_btn" link="#" text="contract us"/>
        </div>
    </div>
</nav>
  )
}

export default Navbar