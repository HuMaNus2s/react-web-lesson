import { useState } from "react";

function CommentFunction({ comment, onDelete }) {
  return (
    <div className="card border-0 shadow-sm rounded-4 fade-in">
      <div className="card-body p-4">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h5 className="card-title mb-0 fw-bold">{comment.author}</h5>
          <button
            className="btn btn-sm btn-outline-danger rounded-pill"
            onClick={onDelete}
            title="Удалить"
          >
            🗑
          </button>
        </div>

        {comment.content && (
          <p className="card-text mb-0">{comment.content}</p>
        )}
      </div>
    </div>
  );
}

function Comment() {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState('');

  const username = window.localStorage.getItem('username') || 'Аноним';

  const addComment = () => {
    if (!text.trim()) return;

    const newComment = {
      id: Date.now(),
      author: username,
      content: text.trim(),
    };

    setComments([newComment, ...comments]);
    setText('');
  };

  const handleDelete = (id) => {
    setComments(comments.filter((c) => c.id !== id));
  };

  return (
    <div style={{ maxWidth: '720px' }}>
      <h2 className="mb-4 fw-bold fs-4">
        💬 Комментарии ({comments.length})
      </h2>

      {/* Форма добавления комментария */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addComment();
        }}
        className="card shadow-sm border-0 mb-4"
      >
        <div className="card-body p-4">
          <div className="mb-3">
            <textarea
              className="form-control"
              rows="3"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Напишите комментарий..."
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 fw-semibold"
          >
            Отправить
          </button>
        </div>
      </form>

      {/* Список комментариев */}
      <div className="d-flex flex-column gap-3">
        {comments.length === 0 ? (
          <p className="text-center text-muted">Пока нет комментов</p>
        ) : (
          comments.map((comment) => (
            <CommentFunction
              key={comment.id}
              comment={comment}
              onDelete={() => handleDelete(comment.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Comment;

/*Надо доделать*/ 