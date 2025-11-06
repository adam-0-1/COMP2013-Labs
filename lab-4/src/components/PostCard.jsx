function PostCard({ title, body }) {
  return (
    <div className="post-card">
      <h3 className="post-card-title">{title}</h3>
      <p className="post-card-body">{body}</p>
    </div>
  );
}

export default PostCard;