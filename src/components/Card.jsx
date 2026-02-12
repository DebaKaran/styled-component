import React from 'react'

const Card = ({item: { title, body, image}}) => {
  return (
    <div>
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
        <div>
            <img src={`./images/${image}`} alt={title}/>
        </div>
    </div>
  )
}

export default Card