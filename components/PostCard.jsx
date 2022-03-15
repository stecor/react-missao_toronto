import React from 'react'

const PostCard = ({ post }) => {
  return (
    <div>
      {post.title}
      {post.description}
    </div>
  )
}

export default PostCard
