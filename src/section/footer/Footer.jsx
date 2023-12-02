

import React from 'react'
import '../footer/footer.css'
import Img from '../../components/img'
import Pera from '../../components/Pera'
import Subhead from '../../components/Subhead'
import Planitem from '../../components/Planitem'





const Footer = () => {
  return (
    <section id="footer">
    <div className="container">
        <div className="footer_wrapper">
            <div className="footer_deatils">
                    <a href="#">
                    <Img src="./images/Logo.png" alt="not found" loading="lazy"/>
                    </a>
                    <Pera style="peragraph" text="Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page."/>
            </div>
            <div className="footer_list_wrapper">
                 <div className="features_list">
                    <Subhead style="features_heading" text="Features"/>
                    <ul className="footer_list">
                        <Planitem text="Home"/>
                        <Planitem text="about"/>
                        <Planitem text="Benifit"/>
                        <Planitem text="Pricing"/>
                        <Planitem text="blog"/>
                    </ul>
                </div>
                 <div className="features_list">
                    <Subhead style="features_heading" text="Products"/>
                    <ul className="footer_list">
                        <Planitem text="Task Management"/>
                        <Planitem text="Company growth"/>
                        <Planitem text="Time tracking"/>
                    </ul>
                </div>
                 <div className="features_list">
                    <Subhead style="features_heading" text="Support"/>
                    <ul className="footer_list">
                        <Planitem text="Customer service"/>
                        <Planitem text="Accessibility"/>
                        <Planitem text="Contact us"/>
                    </ul>
                </div>
            </div>
        </div>
        <div className="copyright">
            <div className="copyright_txt">
                <span className="peragraph">@20201 Innovate.All rights reserved.</span>
            </div>
            <div className="privacy_condition">
                <ul>
                    <li>
                        <a className="peragraph" href="#">Privacy policy</a>
                    </li>
                    <li>
                        <a className="peragraph" href="#">Terms & condition</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</section>
  )
}

export default Footer