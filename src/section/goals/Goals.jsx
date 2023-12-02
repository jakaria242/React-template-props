


import React from 'react'
import '../goals/goals.css'
import Img from '../../components/img'
import Subhead from '../../components/Subhead'
import Pera from '../../components/Pera'
import Btn from '../../components/Btn'



const Goals = () => {
  return (
    <section id="goals">
        <div className="container">
            <div className="goals_wrapper">
                <div className="goals_img">
                <Img src="./images/goals.png" alt="not found"/>
                </div>
                <div className="goals_content">
                    <Subhead style="section_heading" text="Join with any business tasks and any goals"/>
                    <Pera style="peragraph" text="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus temporibus autem."/>
                    <Btn  cmnbtn="common_btn" link="#" text="Sign up"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Goals