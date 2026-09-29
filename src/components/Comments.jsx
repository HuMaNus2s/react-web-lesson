import { useState } from "react";

function CommentFunction({ comment, onDelete }) {
  return (
    <div className="card border-0 shadow-sm rounded-3 bg-light">
      <div className="card-body p-3">
        <div className="d-flex justify-content-between align-items-start mb-1">
          <h6 className="fw-bold mb-0 fs-6">{comment.author}</h6>
          <button
            className="btn btn-sm btn-link text-danger p-0"
            onClick={() => onDelete(comment.id)}
            title="Удалить"
          >
            ✕
          </button>
        </div>
        <p className="mb-0 small">{comment.content}</p>
      </div>
    </div>
  );
}

function Comments({ isVisible, comments, onAdd, onDelete }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(text);
    setText('');
  };

  if (!isVisible && comments.length === 0) return null;

  return (
    <div className="d-flex flex-column gap-3 mt-2">
      
      {isVisible && (
        <form onSubmit={handleSubmit} className="form fade-in d-flex gap-2">
          <textarea
            className="form-control"
            rows="2"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Напишите комментарий..."
            required
            autoFocus
          />
          <button type="submit" className="btn btn-primary btn-sm w-auto nowrap fw-semibold">
            ✈️🏙️
          </button>
        </form>
      )}

      {comments.length > 0 && (
        <div className="d-flex flex-column gap-2">
          {comments.map((comment) => (
            <CommentFunction
              key={comment.id}
              comment={comment}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
      
      {comments.length === 0 && !isVisible && (
         <p className="text-center text-muted small mb-0">Комментариев пока нет</p>
      )}
    </div>
  );
}

export default Comments;