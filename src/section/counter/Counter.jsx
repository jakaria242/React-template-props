

import React from 'react'
import '../counter/counter.css'
import Subhead from '../../components/Subhead'
import Pera from '../../components/Pera'




const Counter = () => {
  return (
    <section id="counter">
    <div className="container">
        <div className="counter_main">
            <div className="counter_icon">
                <div className="counter_play_btn">
                    <i className="fa-solid fa-play"></i>
                </div>
                <Subhead text="Watch a demo"/>
            </div>
            <div className="counter_wrapper">
                <div className="counter_item">
                    <h3>2.8 <span>x</span> </h3>
                    <Pera text="We are ultra faste deal service"/>
                </div>
                <div className="counter_item">
                    <h3>68 <span>%</span> </h3>
                    <Pera text="More deal closed services"/>
                </div>
                <div className="counter_item">
                    <h3>2.4 <span>x</span> </h3>
                    <Pera text="We slove issue ultra faster"/>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Counter