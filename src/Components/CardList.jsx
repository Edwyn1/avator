import React from 'react'
import './CardList.css'
import Card from './Card'
const CardList = (props) => {
  return (
    <div className='cardlist'>
            {props.user.map((userInfo)=>(
                <Card key={userInfo.id} userInfo = {userInfo} />
               ))}
    </div>
  )
}

export default CardList