function Modal({ post, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>

      <div className="modal-box" onClick={(e) => e.stopPropagation()}>

        <button className="modal-close" onClick={onClose}>✕</button>

        <span className="post-id">#{post.id}</span>
        <p className="modal-author">👤 {post.author}</p>
        <h2>{post.title}</h2>
        <p>{post.body}</p>

      </div>
    </div>
  );
}

export default Modal;