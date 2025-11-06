import PostCard from "./PostCard";

function PostsContainer({ posts }) {
  return (
    <div className="posts-container">
      {posts.map((post) => (
        <PostCard key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
}

export default PostsContainer;
