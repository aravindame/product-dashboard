import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Router from './Router';
import ErrorBoundary from './ErrorBoundary';
import ErrorPage from './components/pages/error';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
