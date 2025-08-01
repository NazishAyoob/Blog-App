import { Component, ReactNode } from 'react';

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1 className="error">Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
