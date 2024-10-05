import React from 'react'

export default function PostCard(props) {
  return (
    <div className='post-card'>
        {props.id}
        <h3>{props.title}</h3>
        <p>{props.body}</p>
      
    </div>
  )
}
