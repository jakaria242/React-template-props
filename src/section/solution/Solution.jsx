import React from 'react'

import '../solution/solution.css'
import Pera from '../../components/Pera'
import Subhead from '../../components/Subhead'
import Solutionitem from '../../components/Solutionitem'


const Solution = () => {
  return (
    <section id="solution">
    <div className="container">
        <div className="solution_heading">
            <Subhead style="section_heading" text="The best solutions in one tool"/>
            <Pera style="peragraph effect" text="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus temporibus autem."/>
        </div>
        <div className="solution_wrapper">
            <Solutionitem icon="fa-regular fa-clock" head="Set Daily Alarms"/>
            <Solutionitem icon="fa-solid fa-magnifying-glass" head="Advanced Search"/>
            <Solutionitem icon="fa-regular fa-paper-plane" head="Share Blog Posts"/>
            <Solutionitem icon="fa-regular fa-clock" head="Archive Content"/>
            <Solutionitem icon="fa-regular fa-credit-card" head="Secure Checkout"/>
            <Solutionitem icon="fa-regular fa-clock" head="Set Daily Alarms"/>
        </div>
    </div>
</section>
  )
}

export default Solution