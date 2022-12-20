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
import RentResult from './pages/RentResult';
import NotFound from './pages/Page404';
import Topluluk from './pages/Topluluk';
import Duyuru from './pages/Duyuru';
import Akademisyen from './pages/Akademisyen';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard/admin',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/admin/topluluk" replace /> },
        { path: 'topluluk', element: <Topluluk /> },
        { path: 'akademisyen', element: <Akademisyen /> },
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
      path: '/dashboard/yonetici',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/yonetici/duyuru" replace /> },
        { path: 'topluluk', element: <Topluluk /> },
        { path: 'duyuru', element: <Duyuru /> }
      ]
    },
    {
      path: '/dashboard/ogrenci',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/ogrenci/topluluk" replace /> },
        { path: 'topluluk', element: <Topluluk /> },
        { path: 'duyuru', element: <Duyuru /> }
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
