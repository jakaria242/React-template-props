

import React from 'react'

const Solutionitem = ({icon,head}) => {
  return (
    <div className="solution_item">
    <div className="solutio_heading">
        <div className="solutio_icon">
            <i className={icon}></i>
        </div>
        <h3>{head}</h3>
    </div>
    <p className="peragraph">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.</p>
    <a href="#">Read more</a>
</div>
  )
}

export default Solutionitem