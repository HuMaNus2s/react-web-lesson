import { useState } from 'react';
import Messages from './Messages.jsx';

function PostForm() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newPost = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
    };

    setPosts([newPost, ...posts]);
    setTitle('');
    setDescription('');
  };

  const handleDelete = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

  return (
    <div className="container ml-0" style={{ maxWidth: '720px' }}>
      <h2 className="mb-4 fw-bold fs-4">Мои посты</h2>

      <form onSubmit={handleSubmit} className="card shadow-sm border-0 mb-4">
        <div className="card-body p-2">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Заголовок"
              required
            />
          </div>

          <div className="mb-3">
            <textarea
              className="form-control"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Описание (необязательно)"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 fw-semibold">
            Опубликовать
          </button>
        </div>
      </form>

      <div className="d-flex flex-column gap-3">
        {posts.length === 0 ? (
          <p className="text-center text-muted">Пока нет постов</p>
        ) : (
          posts.map((post) => (
            <Messages
              key={post.id}
              post={post}
              onDelete={() => handleDelete(post.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default PostForm;