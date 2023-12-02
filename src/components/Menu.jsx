


import React from 'react'

const Menu = ({lktxt,text,icname}) => {
  return (
    <li>
    <a href={lktxt}>{text}<i className={icname}></i></a>
   </li>
  )
}

export default Menu