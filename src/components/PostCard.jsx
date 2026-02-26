import React from 'react'

const PostCard = ({ post }) => {
  return (
    <div className='card'>
        <span className='post-id'>#{post.id}</span>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
    </div>
  )
}

export default PostCard;