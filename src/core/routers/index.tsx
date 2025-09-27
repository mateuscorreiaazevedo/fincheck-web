import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import { AuthGuard } from './AuthGuard';

// Layouts
const AuthLayout = lazy(() => import('@/shared/components/layouts/AuthLayout'));
const AppLayout = lazy(() => import('@/shared/components/layouts/AppLayout'));

// Pages
const DashboardPage = lazy(() => import('../pages/Dashboard'));

const LoginPage = lazy(() => import('../pages/Login'));
const RegisterPage = lazy(() => import('../pages/Register'));

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route element={<AuthLayout />}>
            <Route element={<LoginPage />} path="/login" />
            <Route element={<RegisterPage />} path="/register" />
          </Route>
        </Route>

        {/* Private Routes */}
        <Route element={<AuthGuard isPrivate />}>
          <Route element={<AppLayout />}>
            <Route element={<DashboardPage />} path="/" />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
