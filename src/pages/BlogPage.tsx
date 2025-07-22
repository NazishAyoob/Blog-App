import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface Author {
  id: number;
  name: string;
}

function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      const postRes = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
      const postsData = await postRes.json();

      const authorRes = await fetch('https://jsonplaceholder.typicode.com/users');
      const authorsData = await authorRes.json();

      setPosts(postsData);
      setAuthors(authorsData);
    };

    fetchData();
  }, [limit]);

  const getAuthorName = (userId: number) =>
    authors.find(author => author.id === userId)?.name || 'Unknown Author';

  return (
    <div>
      <h2>Latest Blogs</h2>
      {posts.map(post => (
        <div key={post.id} className="post">
          <h3>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </h3>
          <p className="author">by {getAuthorName(post.userId)}</p>
          <p>{post.body.slice(0, 100)}...</p>
        </div>
      ))}
      <button onClick={() => setLimit(prev => prev + 5)}>Load More</button>
    </div>
  );
}

export default BlogPage;
