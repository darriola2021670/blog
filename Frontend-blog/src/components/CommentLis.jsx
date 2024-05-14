import React from 'react';
import Comment from './Comment.jsx'; // Importa el componente de comentario

function CommentList({ comments }) {
  return (
    <div className="comment-list">
      <h2>Comentarios:</h2>
      {comments.map((comment, index) => (
        <Comment key={index} author={comment.author} content={comment.content} />
      ))}
    </div>
  );
}

export default CommentList;
