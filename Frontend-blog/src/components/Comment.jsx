import React from 'react';

function Comment({ author, content }) {
  return (
    <div className="comment">
      <p className="comment-author">{author}</p>
      <p className="comment-content">{content}</p>
    </div>
  );
}

export default Comment;
