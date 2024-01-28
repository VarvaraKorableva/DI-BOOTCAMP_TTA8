import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught an error:', error);
    console.error('ErrorBoundary component stack trace:', info.componentStack);
    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      return <div>An error has occured.</div>
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
