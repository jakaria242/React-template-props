

import React from 'react'
import '../plan/plan.css'
import Subhead from '../../components/Subhead'
import Btn from '../../components/Btn'
import Planitem from '../../components/Planitem'



const Plan = () => {
  return (
    <section id="plan">
    <div className="container">
        <div className="plan_heading">
            <Subhead style="section_heading" text="Build the right plan for your team."/>
            <div className="plan_swape">
                <h4 className="swape_item">montly</h4>
                <div className="swpe_btn"></div>
                <h4 className="swape_item">yearly</h4>
            </div>
        </div>
        <div className="plan_wrapper">
            <div className="plan_item">
                <Subhead style="package" text="Intro"/>
                <div className="plan_package">
                    <ul className="package_deatils">
                        <Planitem icon="fa-regular fa-square-check" text="Hosting Space"/>
                        <Planitem icon="fa-regular fa-square-check" text="Emails"/>
                        <Planitem icon="fa-regular fa-square-check" text="Pricing Feature"/>
                        <Planitem icon="fa-regular fa-square-check"text="Bonus Plugins"/>
                        <Planitem icon="fa-regular fa-square-check" text="Exclusive Support"/>
                    </ul>
                    <ul className="package_value">
                        <Planitem text="300GB"/>
                        <Planitem text="Not Avai."/>
                        <Planitem text="Unlimited"/>
                        <Planitem text="Not Avai."/>
                        <Planitem text="Not Avai."/>
                    </ul>
                </div>
                <div className="plan_btn">
                    <Btn cmnbtn="common_btn" href="link" text="Get started"/>
                </div>
            </div> 
            <div className="plan_item">
                <Subhead style="package" text="Pro"/>
                <div className="plan_package">
                    <ul className="package_deatils">
                        <Planitem icon="fa-regular fa-square-check" text="Hosting Space"/>
                        <Planitem icon="fa-regular fa-square-check" text="Emails"/>
                        <Planitem icon="fa-regular fa-square-check" text="Pricing Feature"/>
                        <Planitem icon="fa-regular fa-square-check"text="Bonus Plugins"/>
                        <Planitem icon="fa-regular fa-square-check" text="Exclusive Support"/>
                    </ul>
                    <ul className="package_value">
                        <Planitem text="700GB"/>
                        <Planitem text="Unlimited."/>
                        <Planitem text="Available"/>
                        <Planitem text="Included."/>
                        <Planitem text="Yesß"/>
                    </ul>
                </div>
                <div className="plan_btn">
                    <Btn cmnbtn="common_btn" href="link" text="Get started"/>
                </div>
            </div> 
            <div className="plan_item">
                <Subhead style="package" text="exclusive"/>
                <div className="plan_package">
                    <ul className="package_deatils">
                       <Planitem icon="fa-regular fa-square-check" text="Hosting Space"/>
                        <Planitem icon="fa-regular fa-square-check" text="Emails"/>
                        <Planitem icon="fa-regular fa-square-check" text="Pricing Feature"/>
                        <Planitem icon="fa-regular fa-square-check"text="Bonus Plugins"/>
                        <Planitem icon="fa-regular fa-square-check" text="Exclusive Support"/>
                    </ul>
                    <ul className="package_value">
                       <Planitem text="900GB"/>
                        <Planitem text="Unlimited."/>
                        <Planitem text="Available"/>
                        <Planitem text="Available"/>
                        <Planitem text="Available"/>
                    </ul>
                </div>
                <div className="plan_btn">
                    <Btn cmnbtn="common_btn" href="link" text="Get started"/>
                </div>
            </div> 
        </div>
    </div>
</section>
  )
}

export default Plan