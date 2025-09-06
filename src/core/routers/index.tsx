import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import { AuthGuard } from './AuthGuard';
import { privateRoutes } from './privateRoutes';
import { publicRoutes } from './publicRoutes';

// Layouts
const AuthLayout = lazy(() => import('@/shared/components/layouts/AuthLayout'));
const AppLayout = lazy(() => import('@/shared/components/layouts/AppLayout'));

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
          <Route element={<AppLayout />}>
            {privateRoutes.map(item => (
              <Route key={item.path} {...item} />
            ))}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
