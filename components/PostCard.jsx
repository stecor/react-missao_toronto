import React from 'react';
import moment from 'moment';

const PostCard = ({ post }) => {
  return (
    <div>
      {post.title}
      {post.description}
    </div>
  );
};

export default PostCard;
