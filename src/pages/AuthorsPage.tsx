import { useEffect, useState } from 'react';

interface Author {
  id: number;
  name: string;
  email: string;
  website: string;
}

function AuthorsPage() {
  const [authors, setAuthors] = useState<Author[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setAuthors(data));
  }, []);

  return (
    <div>
      <h2>Authors</h2>
      {authors.map(author => (
        <div key={author.id} className="post">
          <h3>{author.name}</h3>
          <p>Email: {author.email}</p>
          <p>Website: {author.website}</p>
        </div>
      ))}
    </div>
  );
}

export default AuthorsPage;
