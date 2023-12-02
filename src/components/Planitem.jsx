

import React from 'react'

const Planitem = ({icon,text}) => {
  return (
    <li><i className={icon}></i><span>{text}</span></li>
  )
}

export default Planitem