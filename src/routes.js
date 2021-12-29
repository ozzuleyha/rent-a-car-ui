import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import Cars from './pages/Cars';
import User from './pages/User';
import RentRequests from './pages/RentRequests';
import Employee from './pages/Employee';
import Company from './pages/Company';
import NotFound from './pages/Page404';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard/admin',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/admin/app" replace /> },
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'employee', element: <Employee /> },
        { path: 'company', element: <Company /> }
      ]
    },
    {
      path: '/dashboard/employee',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/employee/rent-requests" replace /> },
        { path: 'rent-requests', element: <RentRequests /> },
        { path: 'cars', element: <Cars /> }
      ]
    },
    {
      path: '/dashboard/user',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/user/cars" replace /> },
        { path: 'cars', element: <Cars /> }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/login" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
