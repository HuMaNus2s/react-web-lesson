import Like from './Like.jsx'
function Messages({ post, onDelete }) {
  return (
    <div className="card border-0 shadow-sm rounded-4 fade-in">
      <div className="card-body p-4">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h5 className="card-title mb-0 fw-bold">{post.title}</h5>
          <button
            className="btn btn-sm btn-outline-danger rounded-pill"
            onClick={onDelete}
            title="Удалить"
          >
            🗑
          </button>
        </div>

        {post.description && (
          <p className="card-text mb-0">{post.description}</p>
        )}
      </div>
      <Like/>
    </div>
  );
}

export default Messages;