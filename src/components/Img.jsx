


import React from 'react'

const Img = ({src,alt,loding,style}) => {
  return (
   
    <div className={style}>
      <picture>
        <img src={src} alt={alt} loding={loding}/>
      </picture>
    </div>
  )
}

export default Img