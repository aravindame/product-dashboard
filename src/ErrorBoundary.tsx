import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
}

interface ErrorBoundaryProps {
  FallbackComponent: React.ComponentType<{ error: Error }>;
  children: React.ReactNode;
}

/**
* The ErrorBoundary component serves as a safety net for capturing unhandled exceptions in its child component hierarchy. It provides a fallback UI through the FallbackComponent prop when an error is encountered, ensuring the application remains operational and enhancing user experience by isolating crashes to specific areas instead of affecting the entire application.

 *
 * @param {ErrorBoundaryProps} props - The properties passed to the ErrorBoundary component.
 * @param {React.ComponentType<{ error: Error }>} props.FallbackComponent - The component to render when an error is caught.
 * @param {React.ReactNode} props.children - The child components that ErrorBoundary will monitor for errors.
 * @returns {React.ReactNode} The children components if no error, otherwise the FallbackComponent.
 */

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Use this section to integrate with an error monitoring tool like Sentry for enhanced error tracking and insights.
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.FallbackComponent;
      return <FallbackComponent error={new Error('Something went wrong.')} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
