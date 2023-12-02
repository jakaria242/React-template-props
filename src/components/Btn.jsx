


import React from 'react'



const Btn = ({nvbtn,cmnbtn,link,text}) => {
  return (
    <div className={nvbtn}>
    <a className={cmnbtn} href={link}>{text}</a>
   </div>
  )
}

export default Btn