import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import { AuthGuard } from '@/app/components/features/auth/AuthGuard';

// Layouts
const AuthLayout = lazy(() => import('@/app/components/layouts/AuthLayout'));

// Public Pages
const LoginPage = lazy(() => import('@/app/pages/Login'));
const RegisterPage = lazy(() => import('@/app/pages/Register'));

// Private Pages
const DashboardPage = lazy(() => import('@/app/pages/Dashboard'));

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
          <Route element={<DashboardPage />} path="/" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
