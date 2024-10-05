import React from 'react'

export default function UserCard(props) {
  return (

    <div className='user-card'>
        <img src={props.data.picture.large} alt="" /> 
        <h3>Name : {props.data.name.first.toUpperCase()}</h3>
        <p>Phone No : {props.data.phone}</p>
        <p>Address : {props.data.location.state}</p>

    </div>
  )
}
