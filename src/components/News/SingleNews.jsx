import React from 'react'

export default function SingleNews({image,title,day,description}) {
  return (
    <div className="single">
      <img  src={image} alt=""/>
    <h2 className="wh-title">{title}</h2>
     <span id='day'>{day}</span>
    <p className="description">
      {description}
    </p>
  </div>
  )
}
