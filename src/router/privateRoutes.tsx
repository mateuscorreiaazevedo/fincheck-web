import { lazy } from 'react';
import type { RouteItem } from '@/core/shared';

const DashboardPage = lazy(() => import('@/view/pages/Dashboard'));

export const privateRoutes: RouteItem[] = [
  {
    element: <DashboardPage />,
    path: '/',
  },
];
