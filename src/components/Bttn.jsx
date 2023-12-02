


import React from 'react'

const Bttn = ({style,type,text}) => {
  return (
    <button className={style} type={type}>{text}</button>
  )
}

export default Bttn