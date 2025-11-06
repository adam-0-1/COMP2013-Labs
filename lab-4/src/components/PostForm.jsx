

function PostForm({ new_post, onTitleChange, onBodyChange, onSubmit }) {
  const handleSubmitClick = (e) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <div className="post-form-container">
      <h2 className="post-form-title">Post Form</h2>
      <div className="post-form-fields">
        <div className="form-field">
          <label className="form-label">Title:</label>
          <input
            type="text"
            value={new_post.title}
            onChange={onTitleChange}
            className="form-input"
          />
        </div>
        <div className="form-field">
          <label className="form-label">Body:</label>
          <input
            type="text"
            value={new_post.body}
            onChange={onBodyChange}
            className="form-input"
          />
        </div>
        <button onClick={handleSubmitClick} className="submit-button">
          Submit
        </button>
      </div>
    </div>
  );
}

export default PostForm;