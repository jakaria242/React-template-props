
import React from 'react'

import '../brand/brand.css'
import Img from '../../components/img'


const Brand = () => {
  return (
    <section id="brand">
    <div className="container">
        <div className="brand_wrapper">
          <div className="brand_item">
          <Img  src="./images/brand.png" alt="not found" loading="lazy"/>
          </div>
          <div className="brand_item">
          <Img  src="./images/brand(1).png" alt="not found" loading="lazy"/>
          </div>
          <div className="brand_item">
          <Img  src="./images/brand(2).png" alt="not found" loading="lazy"/>
          </div>
          <div className="brand_item">
          <Img  src="./images/brand(3).png" alt="not found" loading="lazy"/>
          </div>
          <div className="brand_item">
          <Img src="./images/brand(4).png" alt="not found" loading="lazy"/>
          </div>
          <div className="brand_item">
          <Img  src="./images/brand(5).png" alt="not found" loading="lazy"/>
          </div>
        </div>
    </div>
</section>
  )
}

export default Brand