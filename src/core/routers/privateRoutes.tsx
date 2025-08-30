import { lazy } from 'react';
import type { RouteItem } from '../types/RouteItem';

const DashboardPage = lazy(() => import('@/pages/Dashboard'));

export const privateRoutes: RouteItem[] = [
  {
    element: <DashboardPage />,
    path: '/',
  },
];
