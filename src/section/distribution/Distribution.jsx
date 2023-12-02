

import React from 'react'
import '../distribution/distribution.css'
import Bttn from '../../components/Bttn'
import Img from '../../components/img'
import Subhead from '../../components/Subhead'
import Pera from '../../components/Pera'
import Btn from '../../components/Btn'



const Distribution = () => {
  return (
    <section id="distribution">
    <div className="container">
        <div className="distribution_btn_wrapper">
            <Bttn style="distribution_btn active" text="Artificial Intelligence"/>
            <Bttn style="distribution_btn" text="Header Builder"/>
            <Bttn style="distribution_btn" text="Safe and Private"/>
            <Bttn style="distribution_btn" text="Mobility Solutions"/>
        </div>
        <div className="distribution_wrapper">
            <div className="distribution_img">
                <Img src="./images/distribution.png" alt="not found"  loading="lazy"/>
            </div>
            <div className="distribution_content">
                <Subhead style="section_heading" text="No more messy distribution lists."/>
                <Pera style="peragraph" text="Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page. You can also use the shop features for all demos."/>
                <Btn cmnbtn="common_btn" link="#" text="Get started"/>
            </div>
        </div>
    </div>
</section>
  )
}

export default Distribution