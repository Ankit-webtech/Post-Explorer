import { useEffect, useState } from "react";
import PostCard from "./components/PostCard";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

 useEffect(() => {
  const fetchPosts = async () => {
    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=12"
      );

      if (!res.ok) throw new Error("Failed to fetch posts");

      const data = await res.json();
      setPosts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  fetchPosts();
}, []);

  ////search filter
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="container">
      <h1> Post Explorer </h1>

      <input
        className="search-bar"
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}

      {!loading && !error && filteredPosts.length === 0 && (
        <p className="no-result">No posts found.</p>
      )}

      <div className="grid">
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default App;
