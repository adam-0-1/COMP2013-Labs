import { useState, useEffect } from "react";

import PostsContainer from "./PostsContainer";
import PostForm from "./PostForm";


function FakeApiApp() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [new_post, setNewPost] = useState({ title: "", body: "" });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => {
        setData(posts);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const handleTitleChange = (e) => {
    setNewPost({ ...new_post, title: e.target.value });
  };

  const handleBodyChange = (e) => {
    setNewPost({ ...new_post, body: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (new_post.title && new_post.body) {
      const post = {
        id: Date.now(),
        title: new_post.title,
        body: new_post.body,
        userId: 1,
      };
      setData([post, ...data]);
      setNewPost({ title: "", body: "" });
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <p className="loading-text">Loading...</p>
      </div>
    );
  }

  return (
    <div className="app-container">
      <h1 className="app-title">Fake API App</h1>
      <div className="app-content">
        <PostForm
          new_post={new_post}
          onTitleChange={handleTitleChange}
          onBodyChange={handleBodyChange}
          onSubmit={handleSubmit}
        />
        <PostsContainer posts={data} />
      </div>
    </div>
  );
}

export default FakeApiApp;