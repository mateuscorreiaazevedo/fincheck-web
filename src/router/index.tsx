import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import { AuthGuard } from '@/view/components/features/auth';
import { publicRoutes } from './PublicRoutes';
import { privateRoutes } from './privateRoutes';

// Layouts
const AuthLayout = lazy(() => import('@/view/components/layouts/AuthLayout'));

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route element={<AuthLayout />}>
            {publicRoutes.map(item => (
              <Route key={item.path} {...item} />
            ))}
          </Route>
        </Route>

        {/* Private Routes */}
        <Route element={<AuthGuard isPrivate />}>
          {privateRoutes.map(item => (
            <Route key={item.path} {...item} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
