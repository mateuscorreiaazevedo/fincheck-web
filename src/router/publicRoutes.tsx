import { lazy } from 'react';
import type { RouteItem } from '@/core/shared';

const LoginPage = lazy(() => import('@/view/pages/Login'));
const RegisterPage = lazy(() => import('@/view/pages/Register'));

export const publicRoutes: RouteItem[] = [
  {
    element: <LoginPage />,
    path: '/login',
  },
  {
    element: <RegisterPage />,
    path: '/register',
  },
];
