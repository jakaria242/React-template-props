


import React from 'react'
import '../news/news.css'
import Subhead from '../../components/Subhead'
import Bttn from '../../components/Bttn'




const News = () => {
  return (
    <section id="news">
        <div className="container">
            <div className="News_heading">
                <Subhead style="section_heading" text="Ready to get started? Start your free trial."/>
                <div className="offer">
                    <span>Free 30 days trial</span>
                    <span>Exclusive Support</span>
                    <span>No Fees</span>
                </div>
            </div>
            <form action="" method="" className="news_from">
                <input type="text" name="text" placeholder="Enter your email"/>
                <Bttn style="common_btn" text="Try for free"/>
            </form>
        </div>
    </section>
  )
}

export default News