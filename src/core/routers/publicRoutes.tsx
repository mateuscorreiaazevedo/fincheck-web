import { lazy } from 'react';
import type { RouteItem } from '../types/RouteItem';

const LoginPage = lazy(() => import('@/pages/Login'));
const RegisterPage = lazy(() => import('@/pages/Register'));

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
