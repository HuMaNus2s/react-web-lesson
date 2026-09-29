import { useState } from 'react';
import Like from './Like.jsx';
import Comments from './Comments.jsx';

function Messages({ post, onDelete, comments, setComments }) {
  const [isFormVisible, setIsFormVisible] = useState(false);
  
  const username = window.localStorage.getItem('username') || 'Аноним';
  const postComments = comments.filter(c => c.postId === post.id);

  const addComment = (text) => {
    if (!text.trim()) return;

    const newComment = {
      id: Date.now(),
      postId: post.id, 
      author: username,
      content: text.trim(),
    };
    
    setComments([newComment, ...comments]);
  };

  const deleteComment = (id) => {
    setComments(comments.filter(c => c.id !== id));
  };

  return (
    <div className="card d-block border-0 shadow-sm rounded-4 fade-in">
      <div className='flex-column'>
        <div className="card-body p-4 pb-2">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <h4 className="card-title mb-0 fw-bold fs-5">{post.title}</h4>
            <button
              className="btn btn-sm btn-outline-danger rounded-pill"
              onClick={onDelete}
              title="Удалить пост"
            >
              🗑
            </button>
          </div>
          {post.description && (
            <p className="card-text mb-0">{post.description}</p>
          )}
        </div>

        <div className="px-4 pt-2 d-flex gap-2">
          <Like />
          <button 
            onClick={() => setIsFormVisible(!isFormVisible)}
            className="icon-button rounded-2"
            title={isFormVisible ? "Скрыть комментарии" : "Написать комментарий"}
          >
            {postComments.length} 💬
          </button>
        </div>

        <div className="p-4 pt-2">
          <Comments 
            isVisible={isFormVisible}
            comments={postComments} 
            onAdd={addComment}
            onDelete={deleteComment}
          />
        </div>
      </div>
    </div>
  );
}

export default Messages;