import React from 'react'
import './Card.css'
function Card(props) {
  return (
    <div className='container'>
        <img src={`https://robohash.org/${props.userInfo.id}?set=set2&size=180x180`} alt= 'avator'/>
        <h2>{props.userInfo.name}</h2>
        <p>{props.userInfo.email}</p>
    </div>
  )
}

export default Card