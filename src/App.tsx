import { Suspense, lazy } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';

const HomePage = lazy(() => import('./pages/HomePage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogDetailPage = lazy(() => import('./pages/BlogDetail'));
const AuthorsPage = lazy(() => import('./pages/AuthorsPage'));

function App() {
  return (
    <div className="app">
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/authors">Authors</Link>
      </nav>

      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogDetailPage />} />
            <Route path="/authors" element={<AuthorsPage />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
