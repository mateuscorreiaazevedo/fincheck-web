import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from '@/features/auth';
import { SplashScreen } from '@/shared';
import { Router } from './routers';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<SplashScreen />}>
        <AuthProvider>
          <Router />
          <Toaster />
        </AuthProvider>
      </Suspense>
      <ReactQueryDevtools buttonPosition="bottom-left" />
    </QueryClientProvider>
  );
}
