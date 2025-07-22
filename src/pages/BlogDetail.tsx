import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface BlogPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface Author {
  id: number;
  name: string;
  email: string;
}

function BlogDetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [author, setAuthor] = useState<Author | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const data = await res.json();
      setPost(data);

      const authorRes = await fetch(`https://jsonplaceholder.typicode.com/users/${data.userId}`);
      const authorData = await authorRes.json();
      setAuthor(authorData);
    };

    fetchPost();
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p className="author">By {author?.name} ({author?.email})</p>
      <p>{post.body}</p>
    </div>
  );
}

export default BlogDetailPage;
