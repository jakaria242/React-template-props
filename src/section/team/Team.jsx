

import React from 'react'
import '../team/team.css'
import Subhead from '../../components/Subhead'
import Img from '../../components/img'
import Pera from '../../components/Pera'


const Team = () => {
  return (
    <section id="team">
        <div className="container">
            <div className="team_heading">
                <Subhead style="section_heading" text="Build the right plan for your team."/>
            </div>
            <div className="team_wrapper">
                <div className="team_img_deatils">
                    <div className="team_img">
                        <Img src="./images/team.jpg" alt="not found" loading="lazy"/>
                    </div>
                    <div className="team_deatils">
                        <Pera style="peragraph" text="As a leading digital platform in Paris, we look to engage with our clients beyond the conventional design and development agency relationship, becoming a partner to the people and companies we work with."/>
                        <Subhead text="Jonathon"/>
                        <div className="team_social">
                            <div className="team_social_item"><i className="fa-brands fa-facebook-f"></i></div>
                            <div className="team_social_item"><i className="fa-brands fa-youtube"></i></div>
                            <div className="team_social_item"><i className="fa-brands fa-twitter"></i></div>
                        </div>
                        <div className="team_slaider_btn">
                            <div className="team_slaider_item">
                                <i className="fa-solid fa-angle-left"></i>
                            </div>
                            <div className="team_slaider_item">
                                <i className="fa-solid fa-angle-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team_img_item">
                    {[0,1,2,3,4,5].map((item,index)=>(
                        <Img key={index} style="team_img_box" src="./images/team.jpg" alt="not found"/>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Team