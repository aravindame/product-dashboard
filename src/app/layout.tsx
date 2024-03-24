
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import CssBaseline from '@mui/material/CssBaseline';

/**
 * The RootLayout component serves as the base layout for the entire application.
 *
 * @component
 * @param {RootLayoutProps} props - The props containing the child components to be rendered within the layout.
 * @returns {JSX.Element} The RootLayout component wrapping the entire application's content.
 *
 **/

interface RootLayoutProps {
  children: React.ReactNode;
}

// Initialize a QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Prevents refetching on window focus
    },
  },
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <head>
        <CssBaseline />
      </head>
      <body>
        {/* Wrap children with QueryClientProvider */}
        <QueryClientProvider client={queryClient}>
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
